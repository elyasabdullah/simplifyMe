import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:2rem;
  @media(min-width:992px) {
    width:895px;
  }
  @media(max-width:860px) {
    flex-direction:column;
    border-top: 1px solid #03A9F4;
    border-bottom: 1px solid #03A9F4;
    border-radius: 2rem;
    padding:2rem 0.5rem;
  }
`
export const LeftContainer = styled.div`
  margin-right:2rem;
  @media(max-width:860px) {
    text-align:center;
    margin-bottom:1.5rem;
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

`
export const SImageElement = styled.img.attrs(props => ({
  src: props.src
})) `
  border-radius:4px;
  width:450px;
  height:300;
  border:2px solid #03A9F4;
  border-radius:1rem;
  @media(max-width:570px) {
    width:75vw;
  }
`
