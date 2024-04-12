import styled from "styled-components";

export const Container = styled.div`
  padding:0 1rem;
  position:sticky;
  top:100px;
  @media(max-width:540px) {
    display:none;
  }
`
export const ListCon = styled.ul`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:left;
  height:100%;
  background-color:${(props) => props.theme.textSecondaryColor};
  border-radius:4px;
  @media(max-width:540px) {
    flex-direction:column;
  }
`
export const ListLi = styled.li`
  background-color:${(props) => props.theme.textSecondaryColor};
  color:white;
  cursor:pointer;
  &:hover {
    opacity:0.8;
  }
  @media(max-width:540px) {
    border-bottom:1px solid white;
  }
`