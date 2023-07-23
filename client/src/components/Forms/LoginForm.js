import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const LoginForm = ({ setAlert, setMessage, setEmoji }) => {
  const [loggingInUser, setLoggingInUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { user, setUser } = useContext(UserContext)

  const handleChange = (e) => {
    setLoggingInUser({ ...loggingInUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!loggingInUser.email || !loggingInUser.password) {
      setAlert(true)
      setMessage('Please fill in all fields')
      return setEmoji('🙅🏾‍♂️')
    }

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        ...loggingInUser,
      })

      const { data } = response

      if (data.message === 'user logged in') {
        setUser({
          name: data.name,
          email: data.email,
          balance: data.balance,
        })
        window.localStorage.setItem(
          'user',
          JSON.stringify({
            name: data.name,
            email: data.email,
            balance: data.balance,
          })
        )
        setAlert(true)
        setMessage('User logged in successfully. Please wait...')
        setEmoji('🎉')
        setTimeout(() => {
          window.location.href = '#/account-summary'
        }, 2000)
        return setLoggingInUser({
          email: '',
          password: '',
        })
      } else if (data.message === 'User already exists') {
        setAlert(true)
        setMessage('User already exists')
        return setEmoji('🐒')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='card p-3'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input
            name='email'
            type='email'
            className='form-control form-control-lg'
            placeholder='Email'
            value={loggingInUser.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            name='password'
            type='password'
            className='form-control form-control-lg'
            placeholder='Password'
            value={loggingInUser.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type='submit'
            className={`btn btn-primary mb-3 ${
              // Disable submit button if nothing is inputted
              !loggingInUser.email && !loggingInUser.password
                ? 'disabled'
                : null
            }`}
          >
            {'Log In'}
          </button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
