import ReactCodeInput from "react-code-input";
import styled from "styled-components";

export const StyledCodeInput = styled(ReactCodeInput)`
  display: flex !important;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  input {
    text-align:center;
    width: 66px;
    font-size: 3rem;
    height: 82px;
    padding-left: 7px;
    border:none;
    box-shadow:1px 2px 4px 3px #29293b5c;
    border-radius:4px;
    &:focus, &:active, &:focus-visible {
      border: 3px solid ${(props) => props.theme.textSecondaryColor} !important;
      outline:none !important
    }
    @media(max-width: 600px)  {
      width: 46px;
      font-size: 1.5rem;
      height: 62px;
    }
  }`