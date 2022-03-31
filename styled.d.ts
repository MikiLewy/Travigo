import 'styled-components';
declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      lightGrey: string;
      dimmedBlack: string;
      grey: string;
      navy: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      md: string;
      sd: string;
      s: string;
      xs: string;
      xxs: string;
    };
  }
}
