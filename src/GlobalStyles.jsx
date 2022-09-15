import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    color:#051619;
    font-style: normal;
    font-variant-caps: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: 1.8;
    font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    font-size-adjust: none;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-variant-alternates: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-language-override: normal;
    font-feature-settings: normal;
    font-variation-settings: normal;
    text-rendering: optimizeLegibility;
    overflow-y:hidden;
    overflow: scroll;
    min-width: 320px;
  }

  body {
    background: #eae7de;
    letter-spacing: -.0125rem;
  }
  blockquote, body, dd, dl, figure, h1, h2, h3, h4, h5, h6, input[type="radio"], p {
  margin: 0;
    }
  iframe, img, video {
    width:100%;
  }

  b, h1, h2, h3, h4, h5, h6, legend, strong, th {
  font-weight: 700;
  color: #051619;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.4;
    word-break: keep-all;
  }

  input, textarea {
    -webkit-appearance: none;
  }

  a {
    text-decoration-skip-ink:auto;
    color: #ff6b00;
  }

  a, abbr { 
    text-decoration: none;
  }

  fieldset,hr,iframe,img { 
    border: 0;
  }

  .checkbox, .radio {
    display: block;
    padding: .5rem 0;
    position: relative;
  }

  fieldset, legend, menu, ol, ul {
    margin: 0;
    padding: 0;
  }

  button:not(:active), button:not(:focus) {
    outline: 0;
  }

  .primary-button {
    display: inline-block;
    min-width: 104px;
    background: #ff6b00;
    padding: 10px 1.5rem 11px;
    border-radius: 0;
    text-align: center;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    background: #051619;
    border: 1px solid #051619;
    color: #fff;
  }
`;

export default GlobalStyle;
