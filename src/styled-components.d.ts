import "styled-components";
import { DefaultThemeProps } from "./styles/theme";
declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeProps {}
}
