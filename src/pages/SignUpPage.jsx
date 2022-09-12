import styled from "styled-components";
import {
  SignUpFooter,
  Header,
  SignUpFieldSet,
  SignUpTerms,
} from "../components";

const SignUpPage = () => {
  return (
    <SignUpForm>
      <Header />
      <SignUpFieldSet />
      <SignUpTerms />
      <SignUpFooter />
    </SignUpForm>
  );
};

export default SignUpPage;

const SignUpForm = styled.form`
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5rem 0 10rem;
  box-sizing: border-box;
`;
