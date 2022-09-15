
import styled from "styled-components";


const Google = () => {
  return (
    <LoginSocial>

      <button
        type="button"
        className="google-button secondary-button"
        onClick={() =>
          (window.location.href = "http://54.177.177.138/api/user/login/google")
        }
      >
        <span>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.Google.png`}
            alt=""
          />
        </span>
        구글로 시작하기
      </button>
    </LoginSocial>
  );
};

export default Google;

const LoginSocial = styled.div`
  button:not(:active),
  button:not(:focus) {
    outline: 0;
  }

  .google-button {
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    text-align: left;
  }

  .secondary-button {
    display: inline-block;
    min-width: 104px;
    background: #ff6b00;
    padding: 10px 1.5rem 11px;
    border-radius: 0;
    text-align: center;
    color: #fff;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    border: 1px solid #051619;
    box-sizing: border-box;
    background: #fff;
    color: #051619;
  }
  button {
    font: inherit;
  }

  span {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: 1rem;
  }

  img {
    width: 24px;
  }

  button > * {
    pointer-events: none;
  }
`;
