import { useRef, useState } from "react";
import styled from "styled-components";
import api from "../../shared/api";

const SettingValue = ({ title, data, request, onChange }) => {
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState(data);
  const handleToggle = (e) => {
    if (toggle) {
      setToggle((cur) => !cur);
    }
  };

  const patchData = async (e) => {
    e.preventDefault();
    const requestData = {};
    requestData[request] = data;
    await api.patch("/auth/mypage/profile", requestData).then((res) => {
      if (res.data.success) {
        setToggle(true);
      }
    });
    onChange(value);
  };

  return (
    <DivRow onClick={handleToggle} style={{ cursor: "pointer" }}>
      <h2 className="setting-row-label">{title}</h2>
      <DivValue>
        {toggle && <div style={{ fontSize: "1rem" }}>{data}</div>}
        {!toggle && (
          <form onSubmit={patchData}>
            <div className="textfield">
              <input
                type="text"
                name="name"
                className="textfield-input"
                placeholder={title}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <Footer>
              <button
                type="submit"
                className="setting-row-foot-confirm primary-button"
              >
                변경하기
              </button>
              <button
                type="button"
                className="setting-row-foot-cancel teriary-button"
                onClick={() => setToggle(true)}
              >
                취소
              </button>
            </Footer>
          </form>
        )}
      </DivValue>
      <span className="setting-row-change">
        <i className="icon-arrow"></i>
      </span>
    </DivRow>
  );
};

export default SettingValue;

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
  form {
    display: block;
    margin-top: 0em;
  }

  .textfield {
    margin: 0 0 1rem;
    position: relative;
  }

  .textfield-input {
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

const Footer = styled.footer`
  display: block;

  .teriary-button {
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
    background: none;
    border: none;
    color: #051619;
  }
`;
