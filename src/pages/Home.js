import bankImage from '../images/bank.png'

const homeText = {
  welcomeMessage: 'Welcome to the Bad Bank',
  bankDescription: 'For all your banking needs',
}

const Home = () => {
  const { welcomeMessage, bankDescription } = homeText

  return (
    // Includes bank title, image, and a welcome message.
    // Styled as a Bootstrap card.
    <div className='row my-2'>
      <div className='col-md-6'>
        <div className='card p-3 d-flex justify-content-center'>
          <div>
            <h3 className='card-title'>{welcomeMessage}</h3>
            <p className='text-start'>{bankDescription}</p>
            <div className='d-flex justify-content-center'>
              <img
                src={bankImage}
                className='img-fluid w-50'
                alt='bank-image'
              />
            </div>
            <div className='card-body'></div>
          </div>
        </div>
      </div>
      <div className='g-col-2'></div>
    </div>
  )
}
export default Home
