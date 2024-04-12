import styled from "styled-components";

export const Container = styled.div`

`
export const GroupNameContainer = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:1rem;
  @media(max-width:500px) {
    flex-direction:column;
    align-items:space-between;
  }
`
export const GroupName = styled.p`
  padding:0rem 0.3rem;
  margin:0;
  @media(max-width:500px) {
    font-size:1rem;
  }
`

export const EditContainer = styled.div`
  position:relative;
  @media(max-width:500px) {
    display:flex;
    justify-content:flex-end;
  }
`
export const EditButton = styled.button`
  background-color:inherit;
  color:#139ae1;
  border:none;
  font-size:inherit;
  padding:0 0.5rem;
  &:hover {
    opacity:0.6;
  }
`
export const DeleteButton = styled.button`
  background-color:inherit;
  color:#139ae1;
  border:none;
  font-size:inherit;
  padding:0 0.5rem;
  &:hover {
    opacity:0.6;
  }
`
export const DeleteBoxContainer = styled.div`
  padding: 0.5rem;
  position: absolute;
  box-shadow:0px 0px 3px 0px ${(props) => props.theme.shadowColor};
  background-color:${(props) => props.theme.secondaryBtnhoverBgColor};
  width: 200px;
  border-radius: 4px;
  left: -100%;
  top: 1.5rem;
  z-index:50;
`
export const DeleteBoxText = styled.p`
  padding:0.5rem;
`
export const DeleteBoxBtnsContainer = styled.div`
  display:flex;
  justify-content:flex-end;
`
export const DeleteBoxYesBtn = styled.div`
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
export const DeleteBoxNoBtn = styled.div`
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
