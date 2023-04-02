import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'

const CreateAccountForm = ({ setAlert, setMessage, setEmoji}) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0,
  })

  const [buttonText, setButtonText] = useState("Create Account")

  const { user, setUser } = useContext(UserContext)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Name validation: The user receives an alert if the name field is left blank. Email validation: The user receives an alert if this field is blank 
    if (!newUser.name || !newUser.email || !newUser.password) {
      setAlert(true)
      setMessage('Please fill in all fields')
      setEmoji('🙅🏾‍♂️')
      return
    } else if (user.find((user) => user.email === newUser.email)) {
      setAlert(true)
      setMessage('Email already exists')
      setEmoji('🐒')
      return
      // Password validation: The user receives an alert if the password is less than 8 characters long. 
    } else if (newUser.password.length < 8) {
      setAlert(true)
      setMessage('Password must be at least 8 characters')
      setEmoji('🐙')
      return
    }
    // Success message: Upon selecting the create account button the user should see a success message. 
    else {
      setAlert(true)
      setMessage('Account created successfully')
      setEmoji('🎉')
    }
    setUser([...user, newUser])
    // Cleared Create Account Form:
    setNewUser({
      name: '',
      email: '',
      password: '',
      balance: 0,
    })
    // Add Another Account Button: Upon selecting the create account button, the user should see an add another account button. 
    setButtonText("Add Another Account")
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
