import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header } from '../form';
import { useState, useEffect } from 'react';
import { api } from '../../shared/api';
import { useNavigate } from 'react-router-dom';
import SignUpFieldSet from './SignUpFieldSet';
import SignUpFooter from './SignUpFooter';
import SignUpTerms from './SignUpTerms';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { email, password, passwordConfirm, nickname } = useSelector((state) => state.signup.data);
  const { subscribe } = useSelector((state) => state.signup.terms);
  const [message, setMessage] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token');
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

  const checkValidation = () => {
    let isAbleToPost = true;
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const nicknameReg = /^([가-힣]{1,}|[a-zA-Z]{2,})$/i;
    setMessage({
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
    });

    if (!email) {
      setMessage((cur) => {
        return { ...cur, email: '이메일 주소를 입력해주세요.' };
      });
      isAbleToPost = false;
    } else if (!emailReg.test(email)) {
      setMessage((cur) => {
        return { ...cur, email: '이메일 형식이 아니에요!' };
      });
      isAbleToPost = false;
    }
    if (password && passwordConfirm && password !== passwordConfirm) {
      setMessage((cur) => {
        return {
          ...cur,
          password: '비밀번호가 달라요.',
          passwordConfirm: '비밀번호가 달라요.',
        };
      });
      isAbleToPost = false;
    }

    if (!password) {
      setMessage((cur) => {
        return { ...cur, password: '비밀번호를 입력해주세요.' };
      });
      isAbleToPost = false;
    } else if (password.length < 8) {
      setMessage((cur) => {
        return { ...cur, password: '비밀번호는 8자 이상 가능해요.' };
      });
      isAbleToPost = false;
    }

    if (!passwordConfirm) {
      setMessage((cur) => {
        return { ...cur, passwordConfirm: '비밀번호를 입력해주세요.' };
      });
      isAbleToPost = false;
    } else if (passwordConfirm.length < 8) {
      setMessage((cur) => {
        return {
          ...cur,
          passwordConfirm: '비밀번호는 8자 이상 가능해요.',
        };
      });
      isAbleToPost = false;
    }

    if (!nickname) {
      setMessage((cur) => {
        return { ...cur, nickname: '이름을 입력해주세요.' };
      });
      isAbleToPost = false;
    } else if (!nicknameReg.test(nickname)) {
      setMessage((cur) => {
        return {
          ...cur,
          nickname: '이름은 1글자 이상의 한글, 2글자 이상의 영문만 가능해요!',
        };
      });
      isAbleToPost = false;
    }
    return isAbleToPost;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      api
        .post("/user/signup", {

          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          nickname: nickname,
          isSubscribe: subscribe,
        })
        .then((res) => {
          if (res.data.success) {
            api
              .post("/user/login", {
                email: email,
                password: password,
              })
              .then((loginRes) => {
                if (loginRes.data.success) {
                  localStorage.setItem('access-token', loginRes.headers['access-token']);
                  navigate('/');
                } else {
                  alert(loginRes.data.error.message);
                }
              });
          }
        })
        .catch((res) => alert(res.response.data.error.message));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      <SignUpFieldSet {...message} />
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
