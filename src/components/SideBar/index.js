import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../Context/ThemeContext'
import './index.css'

import {
  SideCont,
  OptionsCont,
  Option,
  Para,
  BotHead,
  Image,
  BotPara,
  Contacts,
} from './styledComponents'

const SideBar = props => {
  const {activeId} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <SideCont status={theme}>
            <OptionsCont>
              <Link to="/" className="link">
                <Option active={activeId === 'HOME'} status={theme}>
                  <AiFillHome /> <Para status={theme}>Home</Para>
                </Option>
              </Link>
              <Link to="/trending" className="link">
                <Option active={activeId === 'TRENDING'} status={theme}>
                  <HiFire /> <Para status={theme}>Trending</Para>
                </Option>
              </Link>
              <Link to="/gaming" className="link">
                <Option active={activeId === 'GAMING'} status={theme}>
                  <SiYoutubegaming /> <Para status={theme}>Gaming</Para>
                </Option>
              </Link>
              <Link to="/saved-videos" className="link">
                <Option active={activeId === 'SAVED'} status={theme}>
                  <MdPlaylistAdd /> <Para status={theme}>Saved Videos</Para>
                </Option>
              </Link>
            </OptionsCont>
            <OptionsCont>
              <BotHead status={theme} as="p">
                CONTACT US
              </BotHead>
              <Contacts>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Contacts>
              <BotPara status={theme}>
                Enjoy! Now to see your channels and recommendations!
              </BotPara>
            </OptionsCont>
          </SideCont>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SideBar
