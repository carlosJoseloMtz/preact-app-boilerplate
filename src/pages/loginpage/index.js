import { h, Component } from 'preact'
import Input from '../../components/input'
import Button from '../../components/button'

class LoginPage extends Component {

  handleUsernameChange (ev) {
    this.setState({
      username: ev.target.value
    })
  }

  handlePwdChange (ev) {
    this.setState({
      password: ev.target.value
    })
  }

  render ({}, { username, password }) {
    return <div className="login-page">
      <Input
        onChange={this.handleUsernameChange.bind(this)}
        value={username}
        placeholder='Username'
      />
      <Input
        onChange={this.handlePwdChange.bind(this)}
        value={password}
        placeholder='Password'
        type='password'
      />
      <Button text='Login' />
    </div>
  }
}

export default LoginPage
