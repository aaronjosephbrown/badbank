import { NavLink, Link } from 'react-router-dom'
import { useEffect } from 'react'

const Nav = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    )
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl)
    )
  }, [])

  return (
    <>
      {/* Includes Create Account, Deposit, Withdraw, All Data, and Home pages
          Routing: Each navigation bar item routes the user to the relevant page. 
          For example, by selecting Home the user should be directed to the Home page. 
          Styled with Bootstrap
          Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page. 
          Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page. */}
      <nav
        id='nav'
        className='navbar navbar-expand-lg mb-2text-white'
        style={{
          backgroundColor: '#13395c',
        }}
      >
        <div className='container '>
          <Link to='/' className='navbar-brand text-white'>
            Bad Bank
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse row p-3'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-end'>
              <li className='nav-item'>
                <NavLink
                  to='createaccount'
                  className='nav-link text-white'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  data-bs-custom-class='custom-tooltip'
                  data-bs-title='Create an Account with us.'
                >
                  Create Account
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='deposit'
                  className='nav-link text-white'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  data-bs-custom-class='custom-tooltip'
                  data-bs-title='Add money to your account.'
                >
                  Deposit
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='withdraw'
                  className='nav-link text-white'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  data-bs-custom-class='custom-tooltip'
                  data-bs-title='Get money out of your account.'
                >
                  Withdraw
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='alldata'
                  className='nav-link text-white'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  data-bs-custom-class='custom-tooltip'
                  data-bs-title='See all the data we have on you and everyone else 🙈.'
                >
                  All Data
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Nav
