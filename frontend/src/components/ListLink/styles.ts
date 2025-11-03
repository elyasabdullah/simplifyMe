import styled from "styled-components";

export const LinkLi = styled.li`
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.secondaryBtnhoverBgColor};
    border-bottom: 1px solid #139ae1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;
export const LinkTag = styled.a`
  color: ${(props) => props.theme.secondaryBtnColor};
`;
