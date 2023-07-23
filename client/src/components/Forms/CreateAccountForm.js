import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const CreateAccountForm = ({ setAlert, setMessage, setEmoji }) => {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0,
  })

  const [buttonText, setButtonText] = useState('Create Account')

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Name validation: The user receives an alert if the name field is left blank. Email validation: The user receives an alert if this field is blank
    if (!newUser.name || !newUser.email || !newUser.password) {
      setAlert(true)
      setMessage('Please fill in all fields')
      return setEmoji('🙅🏾‍♂️')
    } else if (newUser.password.length < 8) {
      setAlert(true)
      setMessage('Password must be at least 8 characters')
      return setEmoji('🐙')
    }
    // Success message: Upon selecting the create account button the user should see a success message.
    // Cleared Create Account Form:

    const data = await axios
      .post('http://localhost:5001/api/createaccount', {
        ...newUser,
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })


    if (data === 'User already exists') {
      setAlert(true)
      setMessage('User already exists')
      return setEmoji('🐒')
    }


    if (data === 'Account created') {
      setAlert(true)
      setMessage('Account created successfully')
      setEmoji('🎉')
      setButtonText('Add Another Account')
      return setNewUser({
        name: '',
        email: '',
        password: '',
        balance: 0,
      })
    }
  }

  return (
    <div className='card p-3'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <input
            name='name'
            type='text'
            className='form-control form-control-lg'
            placeholder='Name'
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            name='email'
            type='email'
            className='form-control form-control-lg'
            placeholder='Email'
            value={newUser.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            name='password'
            type='password'
            className='form-control form-control-lg'
            placeholder='Password'
            value={newUser.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type='submit'
            className={`btn btn-primary mb-3 ${
              // Disable submit button if nothing is inputted
              !newUser.name && !newUser.email && !newUser.password
                ? 'disabled'
                : null
            }`}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  )
}
export default CreateAccountForm
