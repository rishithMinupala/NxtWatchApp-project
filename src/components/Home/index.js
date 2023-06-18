import {Component} from 'react'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../Context/ThemeContext'
import HomeVideoItem from '../HomeVideoItem'
import {
  HomeCont,
  HomeContent,
  BannerCont,
  Image,
  Heading,
  BannerButton,
  ButtonClose,
  HomeVideos,
  SearchCont,
  Input,
  ButtonSearch,
  VideosCont,
  FailImage,
  FailHeading,
  FailPara,
  FailButton,
  Cont,
} from './styledComponents'

const status = {
  laoding: 'LOADING',
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    bannerClose: false,
    activeId: 'HOME',
    search: '',
    renderStatus: status.intial,
    videosData: [],
    totalVideos: '',
  }

  componentDidMount = () => {
    this.getVideosHome()
  }

  getVideosHome = async () => {
    this.setState({renderStatus: status.loading})
    const {search} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrlHome = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrlHome, options)

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
        totalVideos: data.total,
        videosData: updatedData,
        renderStatus: status.success,
      })
    }
    if (response.status === 400) {
      this.setState({renderStatus: status.failure})
    }
  }

  ChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  clickSearch = () => {
    this.getVideosHome()
  }

  close = () => {
    this.setState({bannerClose: true})
  }

  Retry = () => {
    this.getVideosHome()
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
    <Cont>
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
    </Cont>
  )

  renderNoResults = theme => (
    <Cont>
      <FailImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailHeading status={theme}>No Search results found</FailHeading>
      <FailPara status={theme}>
        Try different key words or remove search filter
      </FailPara>
      <FailButton type="button" onClick={this.Retry}>
        Retry
      </FailButton>
    </Cont>
  )

  renderVideos = (data, theme) => (
    <VideosCont>
      {data.map(item => (
        <HomeVideoItem details={item} key={item.id} status={theme} />
      ))}
    </VideosCont>
  )

  renderSuccess = theme => {
    const {videosData, totalVideos} = this.state

    return totalVideos === 0
      ? this.renderNoResults(theme)
      : this.renderVideos(videosData, theme)
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
    const {bannerClose, activeId, search} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <HomeCont>
                <SideBar activeId={activeId} />
                <HomeContent data-testid="home" status={theme}>
                  <BannerCont close={bannerClose} data-testid="banner">
                    <ButtonClose
                      type="button"
                      onClick={this.close}
                      data-testid="close"
                    >
                      <AiOutlineClose />
                    </ButtonClose>
                    <Image
                      src={
                        theme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      }
                      alt="nxt watch logo"
                    />
                    <Heading as="p">
                      Buy Nxt Watch Premium Prepaid plans with <br />
                      UPI
                    </Heading>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerCont>
                  <HomeVideos>
                    <SearchCont status={theme}>
                      <Input
                        type="search"
                        value={search}
                        placeholder="Search"
                        status={theme}
                        onChange={this.ChangeSearch}
                      />
                      <ButtonSearch
                        type="button"
                        status={theme}
                        onClick={this.clickSearch}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </ButtonSearch>
                    </SearchCont>
                    {this.renderSwitch(theme)}
                  </HomeVideos>
                </HomeContent>
              </HomeCont>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
