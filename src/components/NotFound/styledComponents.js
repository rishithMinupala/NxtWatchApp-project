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
  padding: 15px;
  justify-content: center;
  background-color: ${props => (props.status ? '#f9f9f9' : '#181818')};
  min-height: 100vh;
  width: 100%;
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
