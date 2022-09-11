import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <LoginWrap>
      <LoginForm name="login">
        <LoginHeader>
          <Link className="login-logo" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.75f1e668.png`}
              alt="뉴닉 NEWNEEK"
            />
          </Link>
        </LoginHeader>
        <LoginSocial>
          <button type="button" class="login-social-google secondary-button">
            <span>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-google.c9d299ae.svg`}
                alt=""
              />
            </span>
            구글로 시작하기
          </button>
        </LoginSocial>
        <div class="login-divider" />
        <div class="textfield">
          <input
            type="email"
            name="email"
            class="textfield-input"
            placeholder="이메일"
            value=""
          />
        </div>
        <div class="textfield">
          <input
            type="password"
            name="password"
            class="textfield-input"
            placeholder="비밀번호"
            value=""
          />
        </div>
        <div class="login-forgot">
          <Link to="/forgot">비밀번호를 잊으셨나요?</Link>
        </div>
        <LoginFooter>
          <button class="primary-button" type="submit">
            로그인
          </button>
          <p class="login-option">
            <Link to="/signup">회원가입하기</Link>
          </p>
        </LoginFooter>
      </LoginForm>
    </LoginWrap>
  );
};

const LoginWrap = styled.section`
  display: flex;
  min-height: 100vh;
`;

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 7.5% 0% 4rem;
  position: relative;

  .login-divider {
    height: 2px;
    margin: 2rem auto;
    background: #051619;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .textfield {
    margin: 1rem 0;
    position: relative;
  }

  .textfield-input {
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
    border: 1px solid #051619;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    color: #051619;
    transition: all 0.2s;
    outline: none;
    box-shadow: none;
  }

  .login-forgot a {
    color: #051619;
    text-decoration: underline;
  }
`;

const LoginHeader = styled.header`
  text-align: center;

  a {
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
  }

  img {
    vertical-align: middle;
  }
`;

const LoginSocial = styled.div`
  button:not(:active),
  button:not(:focus) {
    outline: 0;
  }

  .login-social-google {
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    text-align: left;
  }

  .secondary-button {
    display: inline-block;
    min-width: 104px;
    background: #ff6b00;
    padding: 10px 1.5rem 11px;
    border-radius: 0;
    text-align: center;
    color: #fff;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    border: 1px solid #051619;
    box-sizing: border-box;
    background: #fff;
    color: #051619;
  }
  button {
    font: inherit;
  }

  .login-social-google span {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
  }

  button > * {
    pointer-events: none;
  }
`;

const LoginFooter = styled.footer`
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

export default LoginPage;
