const TransactionForm = ({title}) => {
  return (
        <div>
          <h4>{title}</h4>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card'>
                <div className='d-flex p-3'>
                  <p>Balance</p>
                  <p className='ms-auto'>$0.00</p>
                </div>
                <div className='mx-3'>
                  <form>
                    <label>{title} Amount</label>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='Amount'
                    />
                    <button type='submit' className='btn btn-primary my-3' >
                      {title}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TransactionForm