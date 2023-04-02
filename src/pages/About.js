import { useContext } from 'react'
import { UserContext } from '../App'

const About = () => {
  const ctx = useContext(UserContext)
  return (
    <div>
    This page is about {ctx.user}
    </div>
  )
}
export default About