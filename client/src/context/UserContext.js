import { createContext, useState, useEffect } from 'react'

const UserContext = createContext({})

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {})
  const [balance, setBalance] = useState(JSON.parse(localStorage.getItem('balance')) || 0)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('balance', JSON.stringify(balance))
  }, [user, balance])

   const getCurrentUser = () => {
    return user
  }

  const updateBalance = (e, title, amount, setAmount, currentUser, callback) => {
    e.preventDefault()
  
    const updatedUser = (user) => {
      if (user.email === currentUser.email) {
        if (title === 'Deposit') {
          // Success Message: When a user completes the withdrawal form, 
          // they receive a success message confirming that their withdraw was processed. 
          callback('Deposit successful!', '💰')
          return { ...user, balance: user.balance + Number(amount) }
        } else if (user.balance - Number(amount) < 0) {
          // Account Overdraft Feature: When a user withdraws a number higher 
          // than the account balance, the user receives an alert message on the withdraw page.
          callback('Account Overdrawn: Add Cash!', '💸')
          return { ...user, balance: user.balance - Number(amount) }
        } else {
          callback('Withdrawal successful!', '💵')
          return { ...user, balance: user.balance - Number(amount) }
        }
      }
      return user
    }
  }

  return (
    <UserContext.Provider
      value={{
        updateBalance,
        setUser,
        getCurrentUser,
        setBalance,
        balance,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
export { UserContext }
