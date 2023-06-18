import Header from '../Header'

import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import {
  HomeCont,
  Cont,
  FailImage,
  FailHeading,
  FailPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme} = value

      return (
        <>
          <Header />
          <HomeCont>
            <SideBar />
            <Cont status={theme}>
              <FailImage
                src={
                  theme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <FailHeading status={theme}>Page Not Found</FailHeading>
              <FailPara status={theme}>
                we are sorry, the page you requested could not be found.
              </FailPara>
            </Cont>
          </HomeCont>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
