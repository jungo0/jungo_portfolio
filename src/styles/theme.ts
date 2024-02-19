import { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";
export const DarkTheme: DefaultTheme = {
  bgColor: "#2B2E33",
  textColor: "rgba(255, 255, 255, 0.6); ",
};
export const LightTheme: DefaultTheme = {
  bgColor: "#fff",
  textColor: "rgba(255, 255, 255, 0.6); ",
};
export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
body {
  font-family: 'Pretendard-Regular', sans-serif;
}
`;
