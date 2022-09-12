import styled from "styled-components";
import { TextField } from "../form";

const SignUpFieldSet = () => {
  return (
    <FieldSet>
      <TextField
        type="text"
        name="email"
        class="textfield-input"
        placeholder="이메일"
        value=""
      />

      <TextField
        type="password"
        name="password"
        placeholder="비밀번호 (8자 이상)"
        value=""
      />
      <TextField
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인 (8자 이상)"
        value=""
      />
      <TextField type="text" name="name" placeholder="닉네임" value="" />
    </FieldSet>
  );
};

const FieldSet = styled.fieldset``;

export default SignUpFieldSet;
