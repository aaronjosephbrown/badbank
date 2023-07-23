import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import formattedBalance from '../util/formattedBalance'

const AccountSummary = () => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className='d-flex flex-column'>
      <h4>Account Information</h4>
      <div className='card p-3'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-column'>
            <div>
              <span className='text-muted'>Account Name: </span>
              <span>{user.name}</span>
            </div>
            <div>
              <span className='text-muted'>Account Email: </span>
              <span>{user.email}</span>
            </div>
            <div>
              <span className='text-muted'>Account Balance: </span>
              <span>{formattedBalance(user.balance)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountSummary
