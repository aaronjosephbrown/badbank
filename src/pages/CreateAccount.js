import CreateAccountForm from '../components/Forms/CreateAccountForm'
import { useEffect, useState } from 'react'

const CreateAccount = () => {
  const [alert, setAlert] = useState(null)
  const [message, setMessage] = useState('')
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    const toastLive = document.getElementById('liveToast')

    if (alert) {
      const toastBootstrap =
        window.bootstrap.Toast.getOrCreateInstance(toastLive)
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
      <div class='toast-container position-fixed bottom-0 end-0 p-3'>
        <div
          id='liveToast'
          class='toast'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div class='toast-header'>
            {emoji}
            <strong class='me-auto'>Message</strong>
            <small>just now</small>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
          <div class='toast-body'>{message}</div>
        </div>
      </div>
    </div>
  )
}
export default CreateAccount
