import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  Cont,
  ThumbImage,
  ChannelCont,
  TitlePara,
  ChannelName,
  UList,
  List,
  List2,
  ChannelInfo,
} from './styledComponents'

const TrendingVideos = props => {
  const {details, status} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name} = channel

  const formatDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <Cont>
        <ThumbImage src={thumbnailUrl} alt="video thumbnail" />
        <ChannelCont>
          <ChannelInfo>
            <TitlePara status={status}>{title}</TitlePara>
            <ChannelName status={status}>{name}</ChannelName>
            <UList status={status}>
              <List as="p">{viewCount} views</List>
              <List2 as="p">{formatDate}</List2>
            </UList>
          </ChannelInfo>
        </ChannelCont>
      </Cont>
    </Link>
  )
}

export default TrendingVideos
