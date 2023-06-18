import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import GamingVideoItem from '../GamingVideoItem'
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
  FailButton,
  FailCont,
  GamingCont,
} from './styledComponents'

const status = {
  laoding: 'LOADING',
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {activeId: 'GAMING', renderStatus: status.intial, videosList: []}

  componentDidMount = () => {
    this.getVideosGaming()
  }

  getVideosGaming = async () => {
    this.setState({renderStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        renderStatus: status.success,
        videosList: updatedData,
        totalVideos: data.total,
      })
    }

    if (response.status === 400) {
      this.setState({renderStatus: status.failure})
    }
  }

  Retry = () => {
    this.getVideosGaming()
  }

  renderLoading = theme => (
    <div
      className="loader-container"
      style={{textAlign: 'center'}}
      data-testid="loader"
    >
      <Loader
        type="ThreeDots"
        color={theme ? '#000000' : '#ffffff'}
        height="50"
        width="50"
      />
    </div>
  )

  renderFailure = theme => (
    <FailCont>
      <FailImage
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        }
        alt="failure view"
      />
      <FailHeading status={theme}>Oops! Something Went Wrong</FailHeading>
      <FailPara status={theme}>
        We are having some trouble to complete your request <br />
        Please try again.
      </FailPara>
      <FailButton type="button" onClick={this.Retry}>
        Retry
      </FailButton>
    </FailCont>
  )

  renderSuccess = theme => {
    const {videosList} = this.state

    return (
      <>
        <PageHeader status={theme}>
          <IconCont status={theme}>
            <SiYoutubegaming />
          </IconCont>
          <Heading status={theme}>Gaming</Heading>
        </PageHeader>
        <GamingCont>
          {videosList.map(video => (
            <GamingVideoItem details={video} key={video.id} status={theme} />
          ))}
        </GamingCont>
      </>
    )
  }

  renderSwitch = theme => {
    const {renderStatus} = this.state

    switch (renderStatus) {
      case status.loading:
        return this.renderLoading(theme)
      case status.failure:
        return this.renderFailure(theme)
      case status.success:
        return this.renderSuccess(theme)
      default:
        return null
    }
  }

  render() {
    const {activeId} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <HomeCont>
                <SideBar activeId={activeId} />
                <Cont status={theme} data-testid="gaming">
                  {this.renderSwitch(theme)}
                </Cont>
              </HomeCont>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
