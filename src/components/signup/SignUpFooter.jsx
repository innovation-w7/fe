import { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SignUpFooter = () => {
  const { age, terms, privacy } = useSelector((state) => state.signup.terms);
  const disabled = useMemo(() => {
    return age && terms && privacy;
  }, [age, terms, privacy]);

  return (
    <Footer>
      <button type="submit" disabled={!disabled}>
        가입하기
      </button>
    </Footer>
  );
};

export default SignUpFooter;

const Footer = styled.footer`
  width: 100%;
  padding: 32px 0;

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
    color: white;
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
