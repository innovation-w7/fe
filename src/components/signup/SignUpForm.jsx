import { useSelector } from "react-redux";
import styled from "styled-components";
import { Header } from "../form";
import { useMemo, useState } from "react";
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

  const checkValidation = () => {
    const { email, password, passwordConfirm, nickname } = data;
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const nicknameReg = /^([가-힣]{1,}|[a-zA-Z]{2,})$/i;
    setAlert({
      email: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
    });

    if (!email) {
      setAlert((cur) => {
        return { ...cur, email: "이메일 주소를 입력해주세요." };
      });
    } else if (!emailReg.test(email)) {
      setAlert((cur) => {
        return { ...cur, email: "이메일 형식이 아니에요!" };
      });
    }
    if (password && passwordConfirm && password !== passwordConfirm) {
      setAlert((cur) => {
        return {
          ...cur,
          password: "비밀번호가 달라요.",
          passwordConfirm: "비밀번호가 달라요.",
        };
      });
    }

    if (!password) {
      setAlert((cur) => {
        return { ...cur, password: "비밀번호를 입력해주세요." };
      });
    } else if (password.length < 8) {
      setAlert((cur) => {
        return { ...cur, password: "비밀번호는 8자 이상 가능해요." };
      });
    }

    if (!passwordConfirm) {
      setAlert((cur) => {
        return { ...cur, passwordConfirm: "비밀번호를 입력해주세요." };
      });
    } else if (passwordConfirm.length < 8) {
      setAlert((cur) => {
        return {
          ...cur,
          passwordConfirm: "비밀번호는 8자 이상 가능해요.",
        };
      });
    }

    if (!nickname) {
      setAlert((cur) => {
        return { ...cur, nickname: "이름을 입력해주세요." };
      });
    } else if (!nicknameReg.test(nickname)) {
      setAlert((cur) => {
        return {
          ...cur,
          nickname: "이름은 1글자 이상의 한글, 2글자 이상의 영문만 가능해요!",
        };
      });
    }

    return;
  };

  const validation = useMemo(() => {
    const { email, password, passwordConfirm, nickname } = alert;
    return email || password || passwordConfirm || nickname;
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkValidation();
    if (validation) {
      console.log("회원가입 실패");
    } else {
      console.log("회원가입 성공");
    }
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
