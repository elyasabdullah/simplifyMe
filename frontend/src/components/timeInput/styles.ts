import styled from "styled-components";
import constants from "src/styleConstants";

export const ElementContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:0.4rem;
`
export const InputElement = styled.input`
  padding:0.5rem;
  border-radius:4px;
  outline:none;
  border:2px solid ${constants.textbluecolor};
  font-size:1.1rem;
  margin:0.3rem 0;
`
export const InputLabel = styled.label.attrs(props => ({
  src: props.htmlFor
}))`
  opacity:0.8;
`