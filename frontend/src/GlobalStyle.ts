import { DefaultTheme, createGlobalStyle } from "styled-components";
import Theme from './types/theme'

const GlobalStyle = createGlobalStyle<{theme: Theme}>`
  body {
    background-color: ${(props) => props.theme.mainBgColor};
    color: ${(props) => props.theme.textMainColor};
  }
`
export default GlobalStyle