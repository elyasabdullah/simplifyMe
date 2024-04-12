import styled from "styled-components";

export const ImageCon = styled.div`
  opacity:0.9;
  margin:2rem 0;
  @media(min-width:992px) {
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
export const FImageElement = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
})) `
  max-width:100%;
  height:fit-content;
  border-radius:1rem;
  border:4px solid #03A9F4;
  @media(min-width:992px) {
    width:895px;
  }
`


 