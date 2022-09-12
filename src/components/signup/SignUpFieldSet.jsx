import { useRef } from "react";
import styled from "styled-components";
import { TextField } from "../form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveData } from "../../redux/modules/SignUpSlice";
import { useEffect } from "react";
const SignUpFieldSet = ({ email, password, passwordConfirm, nickname }) => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nicknameRef = useRef(null);

  const [data, setData] = useState({
    email: null,
    password: null,
    passwordConfirm: null,
    nickname: null,
  });

  const handleChange = () => {
    setData({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value,
      nickname: nicknameRef.current.value,
    });
  };

  useEffect(() => {
    dispatch(saveData(data));
  }, [data, dispatch]);

  return (
    <FieldSet>
      <TextField
        type="text"
        name="email"
        placeholder="이메일"
        small={email}
        ref={emailRef}
        onChange={() => handleChange()}
      />

      <TextField
        type="password"
        name="password"
        placeholder="비밀번호 (8자 이상)"
        minLength="8"
        small={password}
        ref={passwordRef}
        onChange={() => handleChange()}
      />
      <TextField
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인 (8자 이상)"
        minLength="8"
        small={passwordConfirm}
        ref={passwordConfirmRef}
        onChange={() => handleChange()}
      />

      <TextField
        type="text"
        name="name"
        placeholder="닉네임"
        small={nickname}
        ref={nicknameRef}
        onChange={() => handleChange()}
      />
    </FieldSet>
  );
};

const FieldSet = styled.fieldset``;

export default SignUpFieldSet;
