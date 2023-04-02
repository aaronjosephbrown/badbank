const Toast = ({message, emoji, id}) => {
  return (
    <div className='toast-container position-fixed bottom-0 end-0 p-3'>
        <div
          id={id}
          className='toast'
          role='alert'
          aria-live='assertive'
          aria-atomic='true'
        >
          <div className='toast-header'>
            {emoji}
            <strong className='me-auto'>Message</strong>
            <small>just now</small>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='toast'
              aria-label='Close'
            ></button>
          </div>
          <div className='toast-body'>{message}</div>
        </div>
      </div>
  )
}
export default Toast