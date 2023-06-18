import styled from 'styled-components'

export const HeaderCont = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  padding-left: 18px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => (props.status ? '#ffffff' : '#231f20')};
`
export const Image = styled.img`
  width: 130px;
  height: 40px;
`
export const OptionsCont = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  max-width: 240px;
  flex-grow: 1;
`

export const Option = styled.li`
  list-style-type: none;
`

export const ButtonItem = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.status ? '#000000' : '#ffffff')};
  font-size: 25px;
  align-self: center;
  cursor: pointer;
`
export const ImageProfile = styled.img`
  width: 35px;
  height: 32px;
`
export const LogOutBut = styled.button`
  background-color: transparent;
  color: ${props => (props.status ? '#3b82f6' : '#ffffff')};
  border-width: 1px;
  border-bottom-width: 2px;
  border-color: ${props => (props.status ? '#3b82f6' : '#ffffff')};
  padding: 6px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;
`
export const ModalCont = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props => (props.status ? '#ffffff' : '#000000')};
  box-shadow: ${props => (props.status ? '0px 4px 16px 0px #bfbfbf' : null)};
  padding: 16px;
  border-radius: 10px;
`

export const Para = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.status ? '#1e293b' : '#ffffff')};
`
export const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Button1 = styled.button`
  background-color: transparent;
  color: ${props => (props.status ? '#3b82f6' : '#ffffff')};
  border-width: 1px;
  border-color: ${props => (props.status ? '#3b82f6' : '#ffffff')};
  padding: 9px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`
export const Button2 = styled(Button1)`
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
  cursor: pointer;
`
