import styled from "styled-components";
import { LoginForm } from "../components";

const LoginPage = () => {
  return (
    <LoginWrap>
      <LoginForm />
    </LoginWrap>
  );
};

const LoginWrap = styled.section`
  display: flex;
  min-height: 100vh;
`;

export default LoginPage;
