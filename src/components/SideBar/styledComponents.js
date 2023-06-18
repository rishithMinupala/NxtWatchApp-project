import styled from 'styled-components'

export const SideCont = styled.div`
  display: flex;
  background-color: ${props => (props.status ? '#ffffff' : '#231f20')};
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 210px;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`

export const OptionsCont = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-left: 0px;
  width: 100%;
  margin-top: 0px;
`

export const Option = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-grow: 2;
  padding: 10px;
  font-size: 20px;
  padding-top: 0px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: ${props => (props.active ? '700' : '400')};

  color: ${props => (props.active ? '#ff0000' : '#606060')};
  background-color: ${props =>
    props.active && props.status === true ? '#f1f5f9' : 'transparent'};
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  text-decoration: none;
  margin-left: 10px;
  margin-top: 17px;
  color: ${props => (props.status ? '#606060' : '#f8fafc')};
`
export const BotHead = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 21px;
  color: ${props => (props.status ? '#1e293b' : '#ffffff')};
  padding-left: 15px;
`
export const Image = styled.img`
  width: 30px;
  height: 30px;
`

export const BotPara = styled.p`
font-family:"Roboto"
font-weight:500;
font-size:16px;
  color: ${props => (props.status ? '#1e293b' : '#ffffff')};
  padding-left:15px;

`
export const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
