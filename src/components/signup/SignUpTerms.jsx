import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { saveTerms } from "../../redux/modules/SignUpSlice";
import { CheckBox } from "../form";

const SignUpTerms = () => {
  const [age, setAge] = useState(false);
  const [terms, setTerms] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const dispatch = useDispatch();

  const handleAllTrue = () => {
    setAge((cur) => !cur);
    setTerms((cur) => !cur);
    setSubscribe((cur) => !cur);
    setPrivacy((cur) => !cur);
  };

  useEffect(() => {
    dispatch(
      saveTerms({
        age: age,
        terms: terms,
        subscribe: subscribe,
        privacy: privacy,
      })
    );
  }, [dispatch, age, terms, subscribe, privacy]);

  const isAllTrue = useMemo(() => {
    return age && terms && subscribe && privacy;
  }, [age, terms, subscribe, privacy]);

  return (
    <FieldSet>
      <CheckBox
        id="check-all"
        name="all"
        checked={isAllTrue}
        onChange={() => handleAllTrue()}
      >
        <label htmlFor="check-all">모두 동의합니다</label>
      </CheckBox>
      <CheckBox
        id="age"
        name="age"
        checked={age}
        onChange={() => setAge((cur) => !cur)}
      >
        <label htmlFor="age">만 14세 이상 가입 동의 (필수)</label>
      </CheckBox>
      <CheckBox
        id="terms"
        name="terms"
        checked={terms}
        onChange={() => setTerms((cur) => !cur)}
      >
        <label htmlFor="terms">이용약관 동의 (필수)</label>
        <a
          href="https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769"
          target="_blank"
          rel="noopener noreferrer"
        >
          약관보기
        </a>
      </CheckBox>
      <CheckBox
        id="privacy"
        name="privacy"
        checked={privacy}
        onChange={() => setPrivacy((cur) => !cur)}
      >
        <label htmlFor="privacy">개인정보 수집/이용 동의 (필수)</label>
        <a
          href="https://newneek.notion.site/ec39ad284cfa4b7390fff1366236dc19"
          target="_blank"
          rel="noopener noreferrer"
        >
          약관보기
        </a>
      </CheckBox>
      <CheckBox
        id="subscribe"
        name="subscribe"
        checked={subscribe}
        onChange={() => setSubscribe((cur) => !cur)}
      >
        <label htmlFor="subscribe">
          뉴스레터 및 마케팅 정보 수신 동의 (선택)
        </label>
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
`;
