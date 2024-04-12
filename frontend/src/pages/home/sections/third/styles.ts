import styled from "styled-components";

export const ParentContainer = styled.div`
  margin:2rem 0;
  display:flex;
  justify-content:center;
`
export const Container = styled.div`
  text-align:center;
  @media(min-width:700px) {
    width:630px;
  }
`

export const Paragraph = styled.div`
  color: ${(props) => props.theme.textMainColor};
  opacity:0.8;
  margin:2rem 0;
`