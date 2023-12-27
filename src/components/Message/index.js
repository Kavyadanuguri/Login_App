// Write your code here
import './index.css'

const Message = props => {
  const {value3} = props
  const result = !value3 ? 'Welcome User' : 'Please Login'

  return <h1 className="h1">{result}</h1>
}

export default Message
