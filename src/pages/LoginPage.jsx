import styled from "styled-components";
import { Link } from "react-router-dom";
import { Google, Header, LoginFooter, TextField } from "../components";

const LoginPage = () => {
  return (
    <LoginWrap>
      <LoginForm name="login">
        <Header />
        <Google />
        <div class="login-divider" />
        <TextField
          type="email"
          name="email"
          class="textfield-input"
          placeholder="이메일"
          value=""
        />

        <TextField
          type="password"
          name="password"
          class="textfield-input"
          placeholder="비밀번호"
          value=""
        />

        <div class="login-forgot">
          <Link to="/forgot">비밀번호를 잊으셨나요?</Link>
        </div>
        <LoginFooter />
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

  .login-forgot a {
    color: #051619;
    text-decoration: underline;
  }
`;

export default LoginPage;
