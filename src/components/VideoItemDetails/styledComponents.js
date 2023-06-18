import styled from 'styled-components'

export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.status ? '#f9f9f9' : '#0f0f0f')};
  min-height: 100vh;
  width: 100%;
  padding: 18px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 27px;
  color: ${props => (props.status ? '#313131' : '#ffffff')};
`

export const FailImage = styled.img`
  width: 360px;
`

export const FailHeading = styled.h1`
font-family;"Roboto";
font-weight:600;
font-size:26px;
color:${props => (props.status ? '#212121' : '#ffffff')};
`

export const FailPara = styled(FailHeading)`
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.status ? '#1e293b' : '#e2e8f0')};
`

export const FailButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  border-width: 0px;
  border-radius: 6px;
  font-size: 16px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #4f46e5;
  cursor: pointer;
`
export const FailCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
`
export const VideoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`
export const UList = styled.ul`
  display: flex;
  flex-direction: row;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
  padding-left: 0px;
  margin-top: 0px;
  align-items: center;
  margin-top: 16px;
`

export const List = styled.li`
  font-family: 'Roboto';
  font-size: 17px;
  list-style-type: none;
  margin-right: 20px;
`

export const List2 = styled.li`
  font-family: 'Roboto';
  font-size: 17px;
`

export const VideoHead = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: ${props => (props.status ? '#1e293b' : '#f9f9f9')};
`
export const LikesCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ButtonsCont = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const But1 = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  list-style-type: none;
  border-width: 0px;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Roboto';
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
export const ButPara = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
`
export const Line = styled.hr`
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
  width: 100%;
  margin-top: 0px;
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
export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.status ? '#1e293b' : '#f9f9f9')};
  margin-top: 0px;
`

export const SubPara = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
  margin-top: 0px;
`

export const Despara = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
`
