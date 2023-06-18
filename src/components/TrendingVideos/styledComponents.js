import styled from 'styled-components'

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-grow: 2;
  margin-bottom: 20px;
  text-decoration: none;
`
export const ThumbImage = styled.img`
  max-width: 40%;
  margin-right: 15px;
`
export const ChannelCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 8px;
`

export const TitlePara = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  margin-top: 13px;
  margin-bottom: 8px;
  color: ${props => (props.status ? '#1e293b' : '#f9f9f9')};
  width: 73%;
  @media screen and (max-width: 768px) {
    width: 97%;
  }
`
export const ChannelName = styled.p`
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 17px;
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
  font-size: 14px;
  list-style-type: none;
  margin-right: 17px;
`

export const List2 = styled.li`
  font-family: 'Roboto';
  font-size: 14px;
`
