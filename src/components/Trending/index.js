import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
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
  FailButton,
  FailCont,
  TrendingVideosCont,
} from './styledComponents'

const status = {
  laoding: 'LOADING',
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    activeId: 'TRENDING',
    renderStatus: status.intial,
    videosList: [],
    totalVideos: '',
  }

  componentDidMount = () => {
    this.getVideosTrending()
  }

  getVideosTrending = async () => {
    this.setState({renderStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
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
    this.getVideosTrending()
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
    const {videosList, totalVideos} = this.state

    return (
      <>
        <PageHeader status={theme}>
          <IconCont status={theme}>
            <HiFire />
          </IconCont>
          <Heading status={theme}>Trending</Heading>
        </PageHeader>
        <TrendingVideosCont>
          {videosList.map(video => (
            <TrendingVideos details={video} key={video.id} status={theme} />
          ))}
        </TrendingVideosCont>
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
                <Cont status={theme} data-testid="trending">
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

export default Trending
