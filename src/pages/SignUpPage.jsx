import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <SignUpForm>
      <SignUpHeader>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.75f1e668.png`}
            alt="뉴닉 NEWNEEK"
          />
        </Link>
      </SignUpHeader>
      <SignUpFieldSet>
        <div class="textfield  ">
          <input
            type="text"
            name="email"
            class="textfield-input"
            placeholder="이메일"
            value=""
          />
        </div>
        <div class="textfield  ">
          <input
            type="text"
            name="name"
            class="textfield-input"
            placeholder="닉네임"
            value=""
          />
        </div>
        <div class="textfield  ">
          <input
            type="password"
            name="password"
            class="textfield-input"
            placeholder="비밀번호 (8자 이상)"
            value=""
          />
        </div>
        <div class="textfield  ">
          <input
            type="password"
            name="passwordConfirm"
            class="textfield-input"
            placeholder="비밀번호 확인 (8자 이상)"
            value=""
          />
        </div>
      </SignUpFieldSet>
      <SignUpTerms>
        <div class="checkbox undefined">
          <input type="checkbox" id="check-all" name="all" value="" />
          <label for="check-all">모두 동의합니다</label>
        </div>
        <div class="checkbox undefined">
          <input type="checkbox" id="age" name="age" value="" />
          <label for="age">만 14세 이상 가입 동의 (필수)</label>
        </div>
        <div class="checkbox undefined">
          <input type="checkbox" id="terms" name="terms" value="" />
          <label for="terms">이용약관 동의 (필수)</label>
          <a
            href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
            target="_blank"
            rel="noopener noreferrer"
          >
            약관보기
          </a>
        </div>
        <div class="checkbox undefined">
          <input type="checkbox" id="privacy" name="privacy" value="" />
          <label for="privacy">개인정보 수집/이용 동의 (필수)</label>
          <a
            href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19"
            target="_blank"
            rel="noopener noreferrer"
          >
            약관보기
          </a>
        </div>
        <div class="checkbox undefined">
          <input type="checkbox" id="subscribe" name="subscribe" value="" />
          <label for="subscribe">
            뉴스레터 및 마케팅 정보 수신 동의 (선택)
          </label>
          <a
            href="https://newneek.notion.site/97c0f3756cc54e3f9b201f8c3abd0dba"
            target="_blank"
            rel="noopener noreferrer"
          >
            약관보기
          </a>
        </div>
      </SignUpTerms>
      <SignUpFooter>
        <button class="primary-button is-fullwidth" disabled="">
          가입하기
        </button>
      </SignUpFooter>
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

const SignUpHeader = styled.header`
  a {
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
  }
`;

const SignUpFieldSet = styled.fieldset`
  .textfield {
    margin: 1rem 0;
    position: relative;
  }

  input {
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
`;

const SignUpTerms = styled.fieldset`
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

const SignUpFooter = styled.footer`
  width: 100%;

  button {
    width: 100%;
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
    border-top-color: rgb(5, 22, 25);
    border-right-color: rgb(5, 22, 25);
    border-bottom-color: rgb(5, 22, 25);
    border-left-color: rgb(5, 22, 25);
  }

  button:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }

  button:not(:active),
  button:not(:focus) {
    outline: 0;
  }
`;
