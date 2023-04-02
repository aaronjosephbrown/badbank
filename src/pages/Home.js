import bankImage from '../images/bank.png'

const Home = () => {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='card p-3 d-flex justify-content-center'>
          <div>
            <h3 className='card-title'>Welcome to the Bad Bank</h3>
            <p className='text-start'>For all your banking needs</p>
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
