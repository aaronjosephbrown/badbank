import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext({})

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([
    { name: 'John', email: 'john@gmail.com', password: '123456' },
    { name: 'Jane', email: 'jane@yahoo.com', password: '123456' },
  ])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider

export { UserContext }
