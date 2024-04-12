import styled from "styled-components";

export const Container = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin:4rem 0;
`
export const Text = styled.p`
  margin:0rem 0 4rem 0;
  color: ${(props) => props.theme.textMainColor};
  opacity:0.8;
  position:relative;
  @media(min-width:800px) {
    width:680px
  }
  &::before {
    content: "";
    position:absolute;
    top:-1rem;
    left:50%;
    transform:translateX(-50%);
    background-color:#139ae1;
    width:200px;
    height:2px;
  }
  &::after {
    content: "";
    position:absolute;
    bottom:-22px;
    left:50%;
    transform:translateX(-50%);
    background-color:#139ae1;
    width:200px;
    height:2px;
  }
`
export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
})) `
  max-width:100%;
  height:fit-content;
  border-radius:4px;
`
