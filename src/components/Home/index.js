// Write your code here
import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {value: true}
  onClick = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  render() {
    const {value} = this.state

    return (
      <div className="bg-container">
        <div className="con1">
          <Message value3={value} />
          {value ? (
            <Login value1={this.onClick} />
          ) : (
            <Logout value2={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
