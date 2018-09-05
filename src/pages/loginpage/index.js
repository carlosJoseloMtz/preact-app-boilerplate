import { h, Component } from 'preact'
import Input from '../../components/input'
import Button from '../../components/button'
import { authenticate } from '../../services/user.service.js'

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

  handleLoginClick () {
    authenticate({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log('response', res)
    }).catch(err => {
      console.warn('The error', err)
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
      <Button
        onClick={this.handleLoginClick.bind(this)}
        text='Login'
      />
    </div>
  }
}

export default LoginPage
