import styled from "styled-components";
import constants from "src/styleConstants";

export const ButtonEle = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${constants.mainbtnbgcolor};
  border-radius: 4px;
  color: ${constants.mainbtncolor};
  font-size:${constants.smallfontsize};
  width:fit-content;
  &:hover {
    background-color:${constants.mainbtnhoverbgcolor};
    transition:0.3s;
  }
`
