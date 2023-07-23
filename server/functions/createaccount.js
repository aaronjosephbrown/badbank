import { client } from '../db/database.js'
import bcrypt from 'bcrypt'

const createaccount = async (req, res) => {
  const { name, email, password, balance } = req.body

  if (await existingUser(email) === 'User already exists') {
    return res.send('User already exists')
  }
  const hashpassword = await encryptpassword(password)
  const user = { name, email, password: hashpassword, balance }
  const result = await insertUser(user)
  if (result === 'Account created') {
    return res.send('Account created')
  }
  return res.send('There was an error creating the account')
}

const encryptpassword = async (password) => {
  try {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
    return hashedPassword
  } catch (err) {
    console.log(
      `There was an error encrypting the password: ${err}`.red.underline.bold
    )
    throw new Error(err)
  }
}

const existingUser = async (email) => {
  const db = client.db('badbank')
  const options = { projection: { _id: 0, email: 1 } }
  const userExist = await db.collection('users').findOne({ email }, options)

  if (userExist !== null) {
    return 'User already exists'
  }
  return 'creating account'
}

const insertUser = async (user) => {
  const db = client.db('badbank')

  try {
    const result = await db.collection('users').insertOne(user)
    if (result) {
      return 'Account created'
    }
  } catch (err) {
    console.log(
      `There was an error posting the account to the database: ${err}`.red
        .underline.bold
    )
    throw new Error(err)
  }
}

export default createaccount
