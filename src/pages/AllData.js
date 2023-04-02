import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const AllData = () => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <div>Loading...</div>
  }

  const tableBody = () => {
    return user.map((user, index) => {
      return (
        <tr key={index}>
          <th scope='row'>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <table class='table table-striped table-hove'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Password</th>
          </tr>
        </thead>
        <tbody>{tableBody()}</tbody>
      </table>
    </div>
  )
}

export default AllData
