import { client } from '../db/database.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await getUser(email)
  if (user === 'User does not exist') {
    res.status(404).send({message: 'User does not exist'})
    return // Terminate the function here
  }
  const passwordMatch = await checkPassword(password, user.password)
  if (passwordMatch) {
    const token = jwt.sign(
      {
        email: user.email,
        balance: user.balance,
        name: user.name,
      },
      'testing',
      {
        expiresIn: '1h',
      }
    )
    res.cookie('token', token, { httpOnly: true })
    res.status(200).send({
      message: 'user logged in',
      name: user.name,
      email: user.email,
      balance: user.balance,
    })
    return // Terminate the function here
  }
  res.status(401).send({message: 'Incorrect password'}) // Wrong password
}


const getUser = async (email) => {
  const users = client.db('badbank').collection('users')
  const options = {
    projection: { _id: 1, email: 1, password: 1, balance: 1, name: 1 },
  }
  const user = await users.findOne({ email }, options)
  if (user === null) {
    return 'User does not exist'
  }
  return user
}

const checkPassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash)
  return match
}

export default login
