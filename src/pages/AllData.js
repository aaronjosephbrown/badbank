import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import formattedBalance from '../util/formattedBalance'

const AllData = () => {
  const { users } = useContext(UserContext)
  if (!users) {
    return <div>Loading...</div>
  }

  const tableBody = () => {
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope='row'>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{formattedBalance(user.balance)}</td>
        </tr>
      )
    })
  }

  return (
    <div className='card p-3 my-3 table-responsive'>
      <table className='table table-striped table-hover table-sm'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Password</th>
            <th scope='col'>Balance</th>
          </tr>
        </thead>
        <tbody>{tableBody()}</tbody>
      </table>
    </div>
  )
}

export default AllData
