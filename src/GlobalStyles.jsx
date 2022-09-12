import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family : "Noto Sans KR","Apple SD Gothic Neo",sans-serif;
    color:#051619;
    font-size:14px;
    text-rendering: optimizeLegibility;
    line-height: 1.8;
    overflow-y:hidden;
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
`;

export default GlobalStyle;
