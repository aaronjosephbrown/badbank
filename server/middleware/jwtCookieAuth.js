import jwt from 'jsonwebtoken'

const jwtCookieAuth = (req, res, next) => {
  const token = req.cookies.token
  try {
    const user = jwt.verify(token, 'testing')
    req.user = user
    next()
  } catch (err) {
    res.clearCookie('token')
    console.log(err.underline.red.bold)
  }
}

export default jwtCookieAuth