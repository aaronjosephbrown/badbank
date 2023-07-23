import CreateAccountForm from '../components/Forms/CreateAccountForm'
import { useEffect, useState } from 'react'
import Toast from '../components/Toast'

const CreateAccount = () => {
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
        <h4>Create Account</h4>
        <div className='mt-3'>
          <CreateAccountForm setAlert={setAlert} setMessage={setMessage} setEmoji={setEmoji} />
        </div>
      </div>
      <Toast message={message} emoji={emoji} id='toast' />
    </div>
  )
}
export default CreateAccount
