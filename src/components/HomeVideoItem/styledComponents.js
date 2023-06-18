import styled from 'styled-components'

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  flex-grow: 2;
  margin-right: 12px;
  margin-bottom: 15px;
  text-decoration: none;
`
export const ThumbImage = styled.img`
  max-width: 100%;
  height: 170px;
  @media screen and (max-width: 768px) {
    height: 120px;
    max-width: 95%;
  }
`
export const ChannelCont = styled.div`
  display: flex;
  flex-direction: row;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 13px;
  margin-right: 7px;
`

export const TitlePara = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin-top: 13px;
  margin-bottom: 8px;
  color: ${props => (props.status ? '#1e293b' : '#f9f9f9')};
  width: 73%;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
`
export const ChannelName = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
  margin-top: 0px;
`
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const UList = styled.ul`
  display: flex;
  flex-direction: row;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
  padding-left: 0px;
  margin-top: 0px;
`

export const List = styled.li`
  font-family: 'Roboto';
  font-size: 12px;
  list-style-type: none;
  margin-right: 17px;
`

export const List2 = styled.li`
  font-family: 'Roboto';
  font-size: 12px;
`
