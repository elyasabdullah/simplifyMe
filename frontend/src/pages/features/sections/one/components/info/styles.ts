import styled from "styled-components";

export const Container = styled.div`
  display:grid;
  grid-template-columns:3fr 3fr;
  align-items:center;
  margin-bottom:2rem;
  @media(min-width:992px) {
    width:950px;
  }
  @media(max-width:820px) {
    display:flex;
    flex-direction:column-reverse;
    text-align:center
  }
`
export const LeftContainer = styled.div`
  margin-right:3rem;
  @media(max-width:820px) {
    text-align:center;
    margin-right:0;
  }
`
export const HeadText = styled.h3`
  margin-bottom:1rem;
  font-size:1.5rem;
  
`
export const Paragraph = styled.p`
color:${(props) => props.theme.textMainColor};
opacity:0.8;
line-height:1.6;
font-size:1.1rem;
`
export const RightContainer = styled.div`
  padding:5px;
  border: 2px solid #03A9F4;
  border-radius: 1rem;
  @media(max-width:820px) {
    margin-bottom:3rem;
  }
`
export const SImageElement = styled.img.attrs(props => ({
  src: props.src
})) `
  border-radius:4px;
  width:100%;
  height:350px;

`
