import { Header, TextField } from '../form';
import Google from './Google';
import { Link, useNavigate } from 'react-router-dom';
import LoginFooter from './LoginFooter';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { api } from '../../shared/api';
import { useState } from 'react';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState(false);
  const [emailAlert, setEmailAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!email) {
      setEmailAlert('이메일 주소를 입력해주세요.');
    } else if (!emailReg.test(email)) {
      setEmailAlert('이메일 형식을 지켜주세요.');
    }

    if (!password) {
      setPasswordAlert('비밀번호를 입력해주세요.');
    } else if (password.length < 8) {
      setPasswordAlert('비밀번호는 8글자 이상 입니다.');
    }

    if (!emailAlert || !passwordAlert) {
      await api
        .post('/user/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('access-token', res.headers['access-token']);
            console.log(localStorage.getItem('access-token'));
            localStorage.setItem('nickname', res.data.data.nickname); //지워야될부분
            navigate('/');
          } else {
            alert('로그인에 실패하였습니다.');
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
        });
    }
  };

  return (
    <Form name="login" onSubmit={handleSubmit}>
      <Header />
      <Google />
      <div className="login-divider" />
      <TextField type="text" name="email" placeholder="이메일" ref={emailRef} small={emailAlert} />

      <TextField type="password" name="password" placeholder="비밀번호" ref={passwordRef} small={passwordAlert} />
      {message && <p>가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.</p>}
      <div className="login-forgot">
        <Link to="/forgot">비밀번호를 잊으셨나요?</Link>
      </div>
      <LoginFooter />
    </Form>
  );
};

export default LoginForm;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 7.5% 0% 4rem;
  position: relative;

  .login-divider {
    height: 2px;
    margin: 2rem auto;
    background: #051619;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .login-forgot a {
    color: #051619;
    text-decoration: underline;
  }

  p {
    margin-bottom: 1rem;
    color: crimson;
  }
`;
