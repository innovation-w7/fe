import styled from "styled-components";
import { CheckBox } from "../form";

const SignUpTerms = () => {
  return (
    <FieldSet>
      <CheckBox id="check-all" name="all" value="">
        <label for="check-all">모두 동의합니다</label>
      </CheckBox>
      <CheckBox id="age" name="age" value="">
        <label for="age">만 14세 이상 가입 동의 (필수)</label>
      </CheckBox>
      <CheckBox id="terms" name="terms" value="">
        <label for="terms">이용약관 동의 (필수)</label>
        <a
          href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
          target="_blank"
          rel="noopener noreferrer"
        >
          약관보기
        </a>
      </CheckBox>
      <CheckBox id="privacy" name="privacy" value="">
        <label for="privacy">개인정보 수집/이용 동의 (필수)</label>
        <a
          href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19"
          target="_blank"
          rel="noopener noreferrer"
        >
          약관보기
        </a>
      </CheckBox>
      <CheckBox id="subscribe" name="subscribe" value="">
        <label for="subscribe">뉴스레터 및 마케팅 정보 수신 동의 (선택)</label>
        <a
          href="https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba"
          target="_blank"
          rel="noopener noreferrer"
        >
          약관보기
        </a>
      </CheckBox>
    </FieldSet>
  );
};

export default SignUpTerms;

const FieldSet = styled.fieldset`
  padding: 0 0 1rem;

  .checkbox,
  .radio {
    display: block;
    padding: 0.5rem 0;
    position: relative;
  }

  .checkbox a,
  .radio a {
    display: inline !important;
    margin: 0 !important;
    text-decoration: underline;
    color: #051619;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  input[type="checkbox"] {
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
  }

  input[type="checkbox"] + label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  input[type="checkbox"] + label::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 0;
    border: 1px solid #051619;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }

  input[type="checkbox"]:checked + label::after {
    display: block;
    border-color: #fff;
  }
`;
