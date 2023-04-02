import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import formattedBalance from '../../util/formattedBalance'
import Toast from '../Toast'

const TransactionForm = ({ title }) => {
  const { getCurrentUser, setBalance, balance, updateBalance } = useContext(UserContext)
  const [amount, setAmount] = useState('')

  const currentUser = getCurrentUser()

  useEffect(() => {
    setBalance(currentUser.balance)
  }, [currentUser])

  const [alert, setAlert] = useState(null)
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    const toast = document.getElementById('toast')

    if (alert) {
      const toastBootstrap =
        window.bootstrap.Toast.getOrCreateInstance(toast)
      toastBootstrap.show()
      setTimeout(() => {
        setAlert(false)
      }, 3000)
    }
  }, [alert])

 

  const handleChange = (value) => {
    if (isNaN(value) && value != '-') {
      // Not A Number Alert: User receives an alert if they add something that is not a number.
      setMessage('Please enter a number')
      setEmoji('#️⃣')
      setAlert(true)
      setAmount('')
    } else if (value == '-') {
      // Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
      setMessage('Negative numbers are not allowed')
      setEmoji('🚫')
      setAlert(true)
      setAmount('')
    } else {
      setAmount(value)
    }
  }

  return (
    <div>
      <h4>{title}</h4>
      <div className='row'>
        <div className='col-md-4'>
          <div className='card'>
            <div className='d-flex p-3'>
              <p>Balance</p>
              <p className='ms-auto'>{formattedBalance(balance)}</p>
            </div>
            <div className='mx-3'>
              <form
                onSubmit={(e) =>
                  updateBalance(
                    e,
                    title,
                    amount,
                    setAmount,
                    currentUser,
                    (message, emoji) => {
                      setMessage(message)
                      setEmoji(emoji)
                      setAlert(true)
                    }
                  )
                }
              >
                <label>{title} Amount</label>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Amount'
                  value={amount}
                  onChange={(e) => handleChange(e.target.value)}
                />

                <button
                  type='submit'
                  className={`btn btn-primary my-3 ${
                    // Disable deposit button if nothing is input
                    !amount && 'disabled'
                  }`}
                >
                  {title}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toast message={message} emoji={emoji} id='toast' />
    </div>
  )
}

export default TransactionForm
