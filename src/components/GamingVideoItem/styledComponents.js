import styled from 'styled-components'

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  flex-grow: 1;
  margin-right: 16px;
  margin-bottom: 15px;
  text-decoration: none;
`
export const ThumbImage = styled.img`
  max-width:76%
  max-height:100px;
`
export const ChannelCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitlePara = styled.p`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  margin-top: 13px;
  margin-bottom: 8px;
  color: ${props => (props.status ? '#1e293b' : '#f9f9f9')};
  width: 73%;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 13px;
  margin-top: 2px;
  color: ${props => (props.status ? '#606060' : '#94a3b8')};
`
