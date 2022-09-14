import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
const Google = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
  const clientId = '893727311597-528p6s979bj28k9ru1qkg0tulrtsll0s.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log(res);
  };

  const onFailure = (res) => {
    console.log('err', res);
  };

  return (
    <LoginSocial>
      <GoogleLogin
        clientId={clientId}
        render={(props) => (
          <button onClick={props.onClick} className="google-button secondary-button">
            <span>
              <img src={`${process.env.PUBLIC_URL}/images/logo-google.svg`} alt="" />
            </span>
            구글로 시작하기
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
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

  button > * {
    pointer-events: none;
  }
`;
