import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Cont,
  ThumbImage,
  ChannelCont,
  ProfileImage,
  TitlePara,
  ChannelName,
  UList,
  List,
  List2,
  ChannelInfo,
} from './styledComponents'

const HomeVideoItem = props => {
  const {details, status} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name} = channel

  const formatDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Cont>
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <ThumbImage src={thumbnailUrl} alt="video thumbnail" />
        <ChannelCont>
          <ProfileImage src={channel.profile_image_url} alt="channel logo" />
          <ChannelInfo>
            <TitlePara status={status}>{title}</TitlePara>
            <ChannelName status={status}>{name}</ChannelName>
            <UList status={status}>
              <List as="p">{viewCount} views</List>
              <List2 as="p">{formatDate}</List2>
            </UList>
          </ChannelInfo>
        </ChannelCont>
      </Link>
    </Cont>
  )
}

export default HomeVideoItem
