import styled from "styled-components";
import constants from "src/styleConstants";

export const ParentContainer = styled.div`
  display:flex;
  justify-content:center;
  margin:4rem 0;
`
export const Conatainer = styled.div`
  width:380px;
  border:2px solid ${constants.textbluecolor};
  border-radius:4px;
  padding:2rem 4rem;
  @media(max-width:420px) {
    width:80vw;
    padding:2rem;
  }
`
export const GoogleButtonCon = styled.div`
  background-color:#0c6695;
  padding:0.8rem;
  margin-bottom:1rem;
  border-radius:4px;
  cursor:pointer;
  transition:0.3s;
  &:hover {
    opacity:0.9;

  }
` 
export const GoogleButton = styled.div`
  display:flex;
  justify-content:space-around;
  color:white
`
export const LoginOption = styled.p`
  margin-top:1.5rem;
  opacity:0.8;
`