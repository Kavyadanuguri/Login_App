// Write your code here
import './index.css'

const Login = props => {
  const {value1} = props

  return (
    <button type="button" onClick={value1} className="button">
      Login
    </button>
  )
}

export default Login
