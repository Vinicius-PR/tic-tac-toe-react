import 'styled-components'
// import { defaultTheme } from '../styles/theme/default'

// type ThemeType = typeof defaultTheme

// declare module 'styled-components' {
//   export interface DefaultTheme extends ThemeType {}
// }

declare module "styled-components" {
  export interface DefaultTheme {
    lightBlue: string,
    lightBlueHover: string,
    lightYellow: string,
    lightYellowHover: string,
    darkNavy: string,
    semiDarkNavy: string,
    silver: string,
    silverHover: string
  }
}