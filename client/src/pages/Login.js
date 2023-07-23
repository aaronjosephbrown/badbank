import LoginForm from '../components/Forms/LoginForm'
import { useEffect, useState } from 'react'
import Toast from '../components/Toast'

const Login = () => {
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

  return (
    <div className='row'>
      <div className='col-md-4'>
        <h4>Log In</h4>
        <div className='mt-3'>
          <LoginForm setAlert={setAlert} setMessage={setMessage} setEmoji={setEmoji} />
        </div>
      </div>
      <Toast message={message} emoji={emoji} id='toast' />
    </div>
  )
}
export default Login