import { createGlobalStyle } from 'styled-components/macro';
import fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font);
    font-size: var(--fz-md);
  }

  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;
  }

  button {
  }
`;

export default GlobalStyle;