import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import colors from 'colors'
import createaccount from './functions/createaccount.js'
import login from './functions/login.js'

const PORT = process.env.PORT || 5001
const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.post('/api/createaccount', createaccount).post('/api/login', login)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.underline.cyan.bold)
})
