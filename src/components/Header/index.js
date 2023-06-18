import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import ThemeContext from '../../Context/ThemeContext'
import {
  HeaderCont,
  Image,
  OptionsCont,
  Option,
  ButtonItem,
  ButtonCont,
  Button1,
  Button2,
  LogOutBut,
  ImageProfile,
  Para,
  ModalCont,
} from './styledComponents'

import './index.css'

const Header = props => {
  const clickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme, changeTheme} = value

        const ClickChange = () => {
          changeTheme()
        }

        const Class = theme ? 'light' : 'dark'

        return (
          <HeaderCont status={theme}>
            <Link to="/">
              <Image
                src={
                  theme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <OptionsCont>
              <Option>
                <ButtonItem
                  type="button"
                  onClick={ClickChange}
                  status={theme}
                  data-testid="theme"
                >
                  {theme ? <FaMoon /> : <BsFillBrightnessHighFill />}
                </ButtonItem>
              </Option>
              <Option>
                <ImageProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </Option>
              <Option>
                <Popup
                  modal
                  trigger={
                    <LogOutBut type="button" status={theme}>
                      Logout
                    </LogOutBut>
                  }
                  className={`popup-content ${Class}`}
                >
                  {close => (
                    <ModalCont status={theme}>
                      <Para status={theme}>
                        Are you sure, you want to logout
                      </Para>
                      <ButtonCont>
                        <Button1 onClick={close} type="button" status={theme}>
                          Cancel
                        </Button1>
                        <Button2 onClick={clickLogout} type="button">
                          Confirm
                        </Button2>
                      </ButtonCont>
                    </ModalCont>
                  )}
                </Popup>
              </Option>
            </OptionsCont>
          </HeaderCont>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
