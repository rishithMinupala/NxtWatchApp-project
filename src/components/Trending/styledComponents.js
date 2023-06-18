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
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 27px;
  color: ${props => (props.status ? '#313131' : '#ffffff')};
`
export const PageHeader = styled.div`
  background-color: ${props => (props.status ? '#f1f1f1' : '#181818')};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  padding-left: 36px;
`
export const IconCont = styled.div`
  background-color: ${props => (props.status ? ' #cbd5e1' : '#212121')};
  border-width: 0px;
  border-radius: 90px;
  padding: 20px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 40px;
  color: #ff0000;
  margin-right: 15px;
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
export const TrendingVideosCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
`
