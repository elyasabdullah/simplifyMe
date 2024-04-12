import styled from "styled-components";
import constants from "src/styleConstants";

export const Container = styled.div`
  padding:1rem;
`
export const TopSectionContainer = styled.div`
  @media(min-width:868px){
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
export const TopSectionCon = styled.div`
  margin:2rem;
  margin-top:4rem;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media(min-width:868px) {
    width:700px;
    height:244px;
  }
`
export const BigTextHeading = styled.h1`
  font-size:${constants.bigfontsize};
  line-height:1;
  @media(max-width:600px) {
    font-size:3rem
  }
  @media(max-width:450px) {
    font-size:2.5rem;
    display:flex;
    flex-direction:column;
  }
`
export const BigTextSpan = styled.span`
  color:${(props) => props.theme.textSecondaryColor}
`
export const BigTextParagraph = styled.p`
  margin:1rem 0;
  color: ${(props) => props.theme.textMainColor};
  opacity:0.8;
`