import { Route, Routes, HashRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import Balance from './pages/Balance'
import AllData from './pages/AllData'
import ContextProvider from './context/UserContext'

function App() {
  return (
    <ContextProvider>
      <HashRouter>
      <div className='container'>
        <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/createaccount' element={<CreateAccount />} />
            <Route path='/login' element={<Login />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/balance' element={<Balance />} />
            <Route path='/alldata' element={<AllData />} />
          </Routes>
        </div>
      </HashRouter>
    </ContextProvider>
  )
}

export default App
