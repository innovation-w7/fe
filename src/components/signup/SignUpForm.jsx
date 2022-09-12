import { useSelector } from "react-redux";
import styled from "styled-components";
import { Header } from "../form";
import { useState } from "react";
import SignUpFieldSet from "./SignUpFieldSet";
import SignUpFooter from "./SignUpFooter";
import SignUpTerms from "./SignUpTerms";

const SignUpForm = () => {
  const data = useSelector((state) => state.signup.data);
  const { subscribe } = useSelector((state) => state.signup.terms);
  const [alert, setAlert] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm, nickname } = data;
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setAlert({
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
    });

    if (!email) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.email = "이메일 주소를 입력해주세요.";
        return newAlert;
      });
    } else if (!emailReg.test(email)) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.email = "이메일 형식이 아니에요!";
        return newAlert;
      });
    }
    if (password !== passwordConfirm) {
      console.log("비밀번호가 달라요.");
    }

    if (!password) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.password = "비밀번호를 입력해주세요.";
        return newAlert;
      });
    } else if (password.length < 8) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.password = "비밀번호는 8자 이상 가능해요.";
        return newAlert;
      });
    }

    if (!passwordConfirm) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.passwordConfirm = "비밀번호를 입력해주세요.";
        return newAlert;
      });
    } else if (passwordConfirm.length < 8) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.passwordConfirm = "비밀번호는 8자 이상 가능해요.";
        return newAlert;
      });
    }

    if (!nickname) {
      setAlert((cur) => {
        const newAlert = { ...cur };
        newAlert.nickname = "이름을 입력해주세요.";
        return newAlert;
      });
    }

    console.log({ ...data, subscribe });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      <SignUpFieldSet {...alert} />
      <SignUpTerms />
      <SignUpFooter />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 5rem 0 10rem;
  box-sizing: border-box;
`;
