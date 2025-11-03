interface Theme {
  mainBgColor: string;
  secondaryBtnBgCoLor: string;
  secondaryBtnhoverBgColor: string;
  secondaryBtnColor: string;
  textMainColor: string;
  textSecondaryColor: string;
  themeSwitcherBgColor: string;
  ThemeIconLeft: string;
  shadowColor: string;
}

import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default Theme;
