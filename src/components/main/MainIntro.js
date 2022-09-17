import React, { useState } from 'react';
import styled from 'styled-components';
import dochi from '../../static/hiDochi.png';
import { useDispatch } from 'react-redux';
import { __yesSubcribe } from '../../redux/modules/postSlice';

function MainIntro() {
  const dispatch = useDispatch();
  const [subscribe, setSubscribe] = useState();

  const onChangeHandler = (e) => {
    const {
      target: { value, name },
    } = e;
    setSubscribe({ ...subscribe, [name]: value });
  };

  const subscribePost = () => {
    dispatch(__yesSubcribe(subscribe));
  };

  return (
    <div>
      <header style={{ backgroundColor: '#eae7de', position: 'relative' }}>
        <Hellodochi>
          <img className="dochi-img" src={dochi} alt="고슴도치!" />
        </Hellodochi>
        <TitleBox>
          <div className="title-inner">
            우리가 시간이 없지, <span className="title-inner2">세상이 안 궁금하냐!</span>
          </div>
        </TitleBox>
        <SubscribeHead>
          <div className="sub-inner">
            <p>
              🚀 지금 구독하면 <b>내일 아침</b>에 읽을 수 있어요.
            </p>
            <p style={{ marginTop: '1rem' }}>
              ✨지금 <b>491,556명</b>이 뉴닉을 읽고 있어요
            </p>
            <p style={{ marginTop: '2rem' }}>
              세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!&nbsp;
              <br />
              <p style={{ marginTop: '1rem' }}>월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.</p>
            </p>
            <Subscribe>
              <div className="input">
                <input className="text-field" name="email" onChange={onChangeHandler} placeholder="이메일" />
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <input className="text-field" type="text" name="nickname" onChange={onChangeHandler} placeholder="닉네임" />
              </div>
              <div className="checkbox">
                <input type="checkbox" />

                <label>
                  <span style={{ textDecorationLine: 'underline' }}>개인정보 수집·이용</span>에 동의합니다
                </label>
                <p />
                <button type="submit" onClick={subscribePost} className="subscribe-button">
                  뉴스레터 무료로 구독하기
                </button>
              </div>
            </Subscribe>
          </div>
        </SubscribeHead>
      </header>
    </div>
  );
}

export default MainIntro;

const Hellodochi = styled.div`
  position: absolute;
  max-width: 530px;
  margin-top: 35px;
  left: 50%;
  width: 100%;
  margin-left: 60px;
  z-index: 1;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    width: 75%;
    left: auto;
    top: auto;
    bottom: auto;
    margin: -2rem auto auto;
    margin-right: 1px;
    position: relative;
    max-width: 480px;
    z-index: 4;
  }
  .dochi-img {
    vertical-align: middle;
    width: 72%;
    border: 0;
    margin-top: 1rem;
  }
`;

const TitleBox = styled.h1`
  padding: 1rem 0;
  border-bottom: 1px solid #051619;
  font-size: 3rem;
  letter-spacing: -0.025rem;
  background-color: #eae7de;
  max-height: 90px;

  @media screen and (max-width: 1080px) {
    background: #eae7de;
    border-top: 1px solid #051619;
    margin-top: -10rem;
    font-size: 2rem;
    text-align: center;
    position: relative;
    z-index: 6;
  }

  .title-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    font-weight: 700;
    color: #051619;
    font-size: 45px;
    max-height: 325px;
    @media screen and (max-width: 1080px) {
      max-width: 480px;
      margin: 0 auto;
      font-size: 22px;
    }
  }
  .title-inner2 {
    @media screen and (max-width: 1080px) {
      display: block;
    }
  }
`;

const SubscribeHead = styled.div`
  padding: 2rem 0 3rem;
  background: #ff6b00;
  box-sizing: border-box;
  @media screen and (max-width: 1080px) {
    position: relative;
    z-index: 7;
  }
  .sub-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    min-height: 325px;
  }
  .subscribe-button {
    color: #fff;
    text-align: center;
    background: #051619;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 1rem 0 0;
    padding-right: 1.75rem;
    display: inline-block;
    min-width: 104px;
    cursor: pointer;
    position: relative;
    padding: 10px 1.5rem 11px;
  }
`;

const Subscribe = styled.form`
  max-width: 400px;
  margin: 1.5rem 0 0;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  .text-field {
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
