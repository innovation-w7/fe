import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginFooter = () => {
  return (
    <Footer>
      <button type="submit">로그인</button>
      <p>
        <Link to="/signup">회원가입하기</Link>
      </p>
    </Footer>
  );
};

export default LoginFooter;

const Footer = styled.footer`
  margin: 2rem 0;
  button {
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
    width: 100%;
  }

  button:hover {
    background: #fff;
    color: #051619;
  }

  p {
    margin: 2rem 0;
    text-align: center;
  }

  a {
    display: block;
    width: 100%;
    color: #051619;
    text-decoration: underline;
  }
`;
