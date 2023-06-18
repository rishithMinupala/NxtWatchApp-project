import {
  Cont,
  ThumbImage,
  ChannelCont,
  TitlePara,
  Para,
} from './styledComponents'

const GamingVideoItem = props => {
  const {details, status} = props
  const {title, thumbnailUrl, viewCount} = details

  return (
    <Cont>
      <ThumbImage src={thumbnailUrl} alt="video thumbnail" />
      <ChannelCont>
        <TitlePara status={status}>{title}</TitlePara>
        <Para status={status}>{viewCount} Watching Worldwide</Para>
      </ChannelCont>
    </Cont>
  )
}

export default GamingVideoItem
