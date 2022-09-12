import { Header, TextField } from "../form";
import Google from "./Google";
import { Link } from "react-router-dom";
import LoginFooter from "./LoginFooter";
import styled from "styled-components";
import { useRef } from "react";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef?.current.value, passwordRef?.current.value);
  };

  return (
    <Form name="login" onSubmit={handleSubmit}>
      <Header />
      <Google />
      <div className="login-divider" />
      <TextField
        type="email"
        name="email"
        placeholder="이메일"
        ref={emailRef}
      />

      <TextField
        type="password"
        name="password"
        placeholder="비밀번호"
        ref={passwordRef}
      />

      <div className="login-forgot">
        <Link to="/forgot">비밀번호를 잊으셨나요?</Link>
      </div>
      <LoginFooter />
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
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
