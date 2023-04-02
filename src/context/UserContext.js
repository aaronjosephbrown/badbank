import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext({})

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([{
    name: 'John Doe',
    email: 'jd@hotmail.com',
    password: '123456',
    balance: 0,
  }])
  const [balance, setBalance] = useState(0)

  const getCurrentUser = () => {
    return users[users.length - 1]
  }

  const updateBalance = (e, title, amount, setAmount, currentUser, callback) => {
    e.preventDefault()
  
    const updatedUsers = users.map((user) => {
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
    })
  
    setUsers(updatedUsers)
    setAmount('')
  }

  return (
    <UserContext.Provider
      value={{
        updateBalance,
        setUsers,
        getCurrentUser,
        setBalance,
        balance,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider

export { UserContext }
