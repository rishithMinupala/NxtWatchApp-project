import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LoginCont,
  LoginCard,
  Image,
  FormCont,
  LabelContent,
  InputCont,
  ButtonItem,
  OptionCont,
  OptionCont2,
  LabelContent2,
  Para,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'

class LoginRoute extends Component {
  state = {username: '', password: '', show: false, failure: '', errMsg: ''}

  LoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      this.setState({failure: false, errMsg: ''})
      this.LoginSuccess(jwtToken)
    }
    if (response.status === 400) {
      this.setState({errMsg: data.error_msg, failure: true})
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeVisibility = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {show, password, username, errMsg, failure} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <LoginCont themeStatus={theme}>
              <LoginCard themeStatus={theme}>
                <Image
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormCont onSubmit={this.submitLogin}>
                  <OptionCont>
                    <LabelContent htmlFor="username" themeStatus={theme}>
                      USERNAME
                    </LabelContent>
                    <InputCont
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={this.changeUsername}
                      value={username}
                      themeStatus={theme}
                    />
                  </OptionCont>
                  <OptionCont>
                    <LabelContent htmlFor="password" themeStatus={theme}>
                      PASSWORD
                    </LabelContent>
                    <InputCont
                      type={show ? 'text' : 'password'}
                      placeholder="Password"
                      id="password"
                      onChange={this.changePassword}
                      value={password}
                      themeStatus={theme}
                    />
                  </OptionCont>
                  <OptionCont2>
                    <InputCont
                      type="checkbox"
                      id="check"
                      onChange={this.changeVisibility}
                    />
                    <LabelContent2 htmlFor="check" themeStatus={theme}>
                      Show Password
                    </LabelContent2>
                  </OptionCont2>
                  <ButtonItem type="submit">Login</ButtonItem>
                  {failure && <Para>*{errMsg}</Para>}
                </FormCont>
              </LoginCard>
            </LoginCont>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default LoginRoute
