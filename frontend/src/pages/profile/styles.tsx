import styled from "styled-components";

export const Container = styled.div`
  margin-top:3rem;
  margin-left:1rem;
  position:relative;
`
export const InfoContainer = styled.div`
border-left:1px solid #139ae1;
border-right:1px solid #139ae1;
border-top:1px solid #139ae1;
`
export const InfoBox = styled.div`
  border-bottom:1px solid #139ae1;
  padding:1rem;
`
export const InfoText = styled.div`
  margin-left:3rem;
  margin-top:0.3rem;
`
export const ButtonContainer = styled.div`
 margin-top: 3rem;
`
export const LogoutBoxContainer = styled.div`
  padding: 0.5rem;
  position: absolute;
  box-shadow:0px 0px 3px 0px ${(props) => props.theme.shadowColor};
  background-color:${(props) => props.theme.secondaryBtnhoverBgColor};
  width: 200px;
  border-radius: 4px;
  bottom: -7rem;
  left: 0;
  z-index:50;
  &.hide {
    display:none;
  }
`
export const LogoutBoxText = styled.p`
  padding:0.5rem;
`
export const LogoutBoxBtnsContainer = styled.div`
  display:flex;
  justify-content:flex-end;
`
export const LogoutBoxYesBtn = styled.div`
  width:fit-content;
  border-radius:4px;
  padding:5px 10px;
  margin:0 5px;
  cursor:pointer;
  background-color:#139ae1;
  color:white;
  &:hover {
    opacity:0.8
  }
`
export const LogoutBoxNoBtn = styled.div`
  width:fit-content;
  border-radius:4px;
  padding:5px 10px;
  background-color:#139ae1;
  margin:0 5px;
  cursor:pointer;
  color:white;
  &:hover {
    opacity:0.8
  }
`
