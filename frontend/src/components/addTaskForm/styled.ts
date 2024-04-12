import styled from "styled-components";

export const Container = styled.div`
  width:420px;
  padding:1rem 0;
  &.hide {
    display: none
  }
  @media(max-width:500px) {
    width:75vw;
  }
`