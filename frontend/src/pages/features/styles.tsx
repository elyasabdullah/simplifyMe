import styled from "styled-components";
import constants from "src/styleConstants";

export const Container = styled.div`

`
export const HeadTextCon = styled.div`
  margin:2rem;
  margin-top:4rem;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const HeadText = styled.h1`
  font-size:${constants.bigfontsize};
  line-height:1;
  @media(min-width:678px) {
    width:520px;
  }
  @media(max-width:768px) {
    font-size:2.5rem;
  }
`
export const HeadParagraph = styled.p`
  margin:1rem 0;
  color: ${(props) => props.theme.textMainColor};
  opacity:0.8;
  @media(min-width:800px) {
    width:680px
  }
  
`