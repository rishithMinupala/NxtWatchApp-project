import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeCont,
  Cont,
  FailImage,
  FailHeading,
  FailPara,
  FailButton,
  FailCont,
  VideoItem,
  VideoHead,
  UList,
  List,
  List2,
  LikesCont,
  ButtonsCont,
  But1,
  Line,
  ChannelCont,
  ChannelName,
  ChannelInfo,
  SubPara,
  ButPara,
  Despara,
  ProfileImage,
} from './styledComponents'

const status = {
  laoding: 'LOADING',
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    renderStatus: status.intial,
    videosList: {},
    likeButton: false,
    dislikeBut: false,
    saveButton: false,
  }

  componentDidMount = () => {
    this.getVideosTrending()
  }

  getVideosTrending = async () => {
    this.setState({renderStatus: status.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
        videoUrl: video.video_url,
      })

      const videosList = updatedData(data.video_details)
      this.setState({
        renderStatus: status.success,
        videosList,
      })
    }
    if (response.status === 400) {
      this.setState({renderStatus: status.failure})
    }
  }

  Retry = () => {
    this.getVideosTrending()
  }

  like = () => {
    this.setState(prevState => ({
      likeButton: !prevState.likeButton,
      dislikeBut: false,
    }))
  }

  dislike = () => {
    this.setState(prevState => ({
      dislikeBut: !prevState.dislikeBut,
      likeButton: false,
    }))
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

  renderSuccess = () => {
    const {videosList, likeButton, dislikeBut, saveButton} = this.state

    const {
      id,
      title,
      videoUrl,
      description,
      channel,
      viewCount,
      publishedAt,
    } = videosList

    const formatDate = formatDistanceToNow(new Date(publishedAt))

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, saveVideos, removeSavedVideo} = value

          const save = () => {
            if (saveButton) {
              removeSavedVideo(id)
            } else {
              saveVideos(videosList)
            }
            this.setState(prevState => ({saveButton: !prevState.saveButton}))
          }

          return (
            <VideoItem>
              <ReactPlayer url={videoUrl} width="100%" height="60%" />
              <VideoHead status={theme} as="p">
                {title}
              </VideoHead>
              <LikesCont>
                <UList status={theme}>
                  <List as="p">{viewCount} views</List>
                  <List2 as="p">{formatDate}</List2>
                </UList>
                <ButtonsCont>
                  <But1 type="button" onClick={this.like} active={likeButton}>
                    <BiLike />
                    Like
                  </But1>
                  <But1
                    type="button"
                    onClick={this.dislike}
                    active={dislikeBut}
                  >
                    <BiDislike />
                    Dislike
                  </But1>
                  <But1 type="button" onClick={save} active={saveButton}>
                    <MdPlaylistAdd />
                    <ButPara>{saveButton ? 'Saved' : 'Save'}</ButPara>
                  </But1>
                </ButtonsCont>
              </LikesCont>
              <Line status={theme} />
              <ChannelCont>
                <ProfileImage
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <ChannelInfo>
                  <ChannelName status={theme}>{channel.name}</ChannelName>
                  <SubPara status={theme}>
                    {channel.subscriber_count} subscribers
                  </SubPara>
                  <Despara status={theme}>{description}</Despara>
                </ChannelInfo>
              </ChannelCont>
            </VideoItem>
          )
        }}
      </ThemeContext.Consumer>
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
        return this.renderSuccess()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <HomeCont>
                <SideBar />
                <Cont status={theme} data-testid="videoItemDetails">
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

export default VideoItemDetails
