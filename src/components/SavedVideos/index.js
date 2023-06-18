import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import TrendingVideos from '../TrendingVideos'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeCont,
  Cont,
  Heading,
  PageHeader,
  IconCont,
  FailImage,
  FailHeading,
  FailPara,
  FailCont,
  TrendingVideosCont,
} from './styledComponents'

class SavedVideos extends Component {
  state = {activeId: 'SAVED'}

  renderFailure = theme => (
    <FailCont>
      <FailImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
        alt="no saved videos"
      />
      <FailHeading status={theme}>No saved videos found</FailHeading>
      <FailPara status={theme}>Save your videos by clicking a button</FailPara>
    </FailCont>
  )

  renderSuccess = (theme, videosList) => (
    <>
      <PageHeader status={theme}>
        <IconCont status={theme}>
          <HiFire />
        </IconCont>
        <Heading status={theme}>Saved Videos</Heading>
      </PageHeader>
      <TrendingVideosCont as="ul">
        {videosList.map(video => (
          <TrendingVideos details={video} key={video.id} status={theme} />
        ))}
      </TrendingVideosCont>
    </>
  )

  render() {
    const {activeId} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, savedVideosList} = value
          return (
            <>
              <Header />
              <HomeCont>
                <SideBar activeId={activeId} />
                <Cont status={theme} data-testid="savedVideos">
                  {savedVideosList.length === 0
                    ? this.renderFailure(theme)
                    : this.renderSuccess(theme, savedVideosList)}
                </Cont>
              </HomeCont>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
