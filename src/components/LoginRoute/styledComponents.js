import styled from 'styled-components'

export const LoginCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: ${props => (props.themeStatus ? '#f8fafc' : '#181818')};
  min-height: 100vh;
`
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.themeStatus ? '#ffffff' : '#000000')};
  border-radius: 12px;
  border-width: 0px;
  padding: 30px;
  box-shadow: ${props =>
    props.themeStatus ? '0px 4px 16px 0px #bfbfbf' : null};
  width: 360px;
  height: 30%;
`
export const OptionCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 5px;
`

export const OptionCont2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Image = styled.img`
  width: 200px;
  height: 60px;
  padding-bottom: 11px;
`
export const FormCont = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  padding-left: 0px;
  width: 100%;
`
export const LabelContent = styled.label`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 12px;
  color: ${props => (props.themeStatus ? '#64748b' : '#f8fafc')};
  margin-top: 10px;
  margin-bottom: 6px;
`
export const InputCont = styled.input`
  border-width: 2px;
  border-color: ${props => (props.themeStatus ? ' #e2e8f0' : '#1e293b')};
  border-style: solid;
  padding: 11px;
  border-radius: 6px;
  background-color: ${props => (props.themeStatus ? ' #ffffff' : '#000000')};
  color: ${props => (props.themeStatus ? ' #1e293b' : '#f1f5f9')};
  font-family: 'Roboto';
  font-weight: 400;
  margin-bottom: 6px;
  outline: none;
`
export const ButtonItem = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  padding: 10px;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
`
export const LabelContent2 = styled(LabelContent)`
  font-size: 15px;
  color: ${props => (props.themeStatus ? '#181818' : ' #f8fafc')};
  margin-bottom: 10px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
`
