import styled from 'styled-components'

export const HomeCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${props => (props.status ? '#f9f9f9' : '#181818')};
  min-height: 100vh;
  width: 100%;
`
export const BannerCont = styled.div`
  display: ${props => (props.close ? 'none' : 'flex')};
  flex-direction: column;
  padding: 15px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-top: 0px;
`

export const Image = styled.img`
  width: 130px;
  height: 40px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 24px;
  color: #1e293b;
`

export const ButtonClose = styled.button`
  font-size: 15px;
  background-color: transparent;
  border-width: 0px;
  color: #181818;
  font-weight: 500;
  align-self: flex-end;
  cursor: pointer;
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: #1e293b;
  border-width: 1px;
  width: 100px;
  border-color: #0f0f0f;
  padding: 10px;
  border-radius: 0px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`
export const HomeVideos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`
export const SearchCont = styled.div`
  display: flex;
  width: 55%;
  flex-direction: row;

  @media screen and (min-width: 992px) {
    width: 40%;
  }
`

export const Input = styled.input`
  padding: 5px;
  flex-grow: 2;
  background-color: ${props => (props.status ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.status ? '#475569' : '#f8fafc')};
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
  border-radius: 0px;
  outline: none;
`
export const ButtonSearch = styled.button`
  padding: 5px;
  font-size: 15px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #cccccc;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.status ? '#ebebeb' : '#424242')};
`
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
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
export const VideosCont = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 15px;
`
