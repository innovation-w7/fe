import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { SettingHeader, SettingFooter } from ".";
import api from "../../shared/api";
import SettingPassword from "./SettingPassword";
import SettingSubscribe from "./SettingSubscribe";
import SettingValue from "./SettingValue";

const SettingSection = () => {
  const [profile, setProfile] = useState({});
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const [subscribeToggle, setSubscribeToggle] = useState();

  useEffect(() => {
    const getData = async () => {
      await api
        .get("/auth/mypage/profile")
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            setNickname(res.data.data.nickname);
            setSubscribeToggle(res.data.data.isSubscribe);
          }
        })
        .catch((err) => console.log(err));
    };
    if (!localStorage.getItem("access-token")) {
      navigate("/");
    }
    getData();
  }, []);

  return (
    <Section>
      <SettingHeader nickname={nickname} />
      <div className="setting-body">
        <h2>뉴니커 정보</h2>
      </div>
      <SettingValue
        title="닉네임"
        data={nickname}
        onChange={(value) => setNickname(value)}
        request="nickname"
      />
      <SettingValue
        title="출생년도"
        data="고슴이는 두살인데 준형홍 뉴니커는 몇 살이슴"
      />
      <SettingValue title="성별" data="고슴이는 성별을 밝히고 싶지 않슴!" />
      <DivRow style={{ cursor: "default" }}>
        <h2 className="setting-row-label">배송지</h2>
        <DivValue>
          <p className="setting-row-value-username"></p>
          <p className="setting-row-value-address"></p>
          <p className="setting-row-value-phone"></p>
        </DivValue>
      </DivRow>

      <small style={{ display: "block", margin: "2rem 0px 0.5rem" }}>
        데스크탑에서 이모지는{" "}
        <a
          href="https://emojipedia.org/unicode-8.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          여기에서
        </a>{" "}
        복사 붙여넣기!
      </small>
      <DivRow style={{ cursor: "pointer" }}>
        <h2 className="setting-row-label">이모지</h2>
        <DivValue>
          <div style={{ fontSize: "1.5rem" }}>🦔</div>
        </DivValue>
        <span className="setting-row-change">
          <i className="icon-arrow"></i>
        </span>
      </DivRow>
      <SettingValue title="직업" />
      <SettingValue title="관심분야" data={"고슴이는 밀웜에 관심있슴!"} />

      <div className="setting-body">
        <h2>비밀번호 변경</h2>
      </div>

      <SettingPassword title={"비밀번호"} />

      <div className="setting-body">
        <h2>이메일 수신여부</h2>
      </div>
      <DivRow style={{ cursor: "default" }}>
        <h2 className="setting-row-label">이메일</h2>
        <DivValue></DivValue>
      </DivRow>
      <SettingSubscribe
        isSubscribe={subscribeToggle}
        onChange={() => setSubscribeToggle((cur) => !cur)}
      />

      <SettingFooter />
    </Section>
  );
};

export default SettingSection;

const Section = styled.section`
  max-width: 1360px;
  margin: 2rem auto 8rem;
  padding: 0 5%;

  h1 {
    display: none;
  }

  p {
    margin: 1rem 0 0;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: -0.025rem;
    line-height: 1.4;
  }

  .setting-body {
    margin: 4rem 0 0;
  }

  .setting-body h2 {
    margin: 0 0 1rem;
    font-size: 1.25rem;
  }

  .setting-row-label {
    width: 7rem;
  }

  .setting-row-value {
    width: calc(100% - 7rem);
  }

  .setting-row-value-username {
    width: 100%;
  }

  .setting-row-value-address {
    width: 100%;
    margin: -0.25rem 0;
    line-height: 1.5;
  }

  .setting-row-value-phone {
    width: 100%;
  }

  .switch {
    display: block;
    position: relative;
  }

  input[type="checkbox"] {
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
  }

  input[type="checkbox"][role="switch"] + label {
    display: block;
    height: 24px;
    padding-left: 64px;
    cursor: pointer;
  }

  input[type="checkbox"] + label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  input[type="checkbox"][role="switch"] + label::before {
    content: "";
    display: block;
    width: 48px;
    height: 24px;
    border: 1px solid #051619;
    border-radius: 20px;
    box-sizing: border-box;
    background: #ccc;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.2s;
  }

  input[type="checkbox"][role="switch"] + label::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 4px;
    top: 4px;
    transition: left 0.2s;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
`;

const DivRow = styled.div`
  margin: -1px calc(-2rem - 2px) 0;
  display: -webkit-flex;
  display: flex;
  margin-top: -1px;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #051619;
  border-top-color: rgb(5, 22, 25);
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;
  position: relative;

  :first-of-type {
    border-top: 1px solid #051619;
  }
`;

const DivValue = styled.div`
  width: calc(100% - 7rem);
`;
