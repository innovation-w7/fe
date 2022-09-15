import { useState } from "react";
import styled from "styled-components";
import DeleteFooter from "./DeleteFooter";

const DeleteForm = () => {
  const [radioValue, setRadioValue] = useState(null);

  const handleChange = (e) => {
    setRadioValue(e.target.value);
  };
  return (
    <Form>
      <section className="delete-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/gosum-crying.612f6f3f.png`}
          alt=""
        />
      </section>
      <section>
        <header className="delete-head">
          <h1 className="delete-head-title">회원 탈퇴</h1>
        </header>
        <section className="delete-why">
          <h2 className="delete-why-title">
            안녕~은 영원한~ 헤어짐은 아니겠~지요. 어떤 점이 불편하셨나요?
            참고해서 다음에 만났을 때는 더 좋은 서비스가 되어 있을게요.
          </h2>
          <br />
          <fieldset>
            <div className="radio ">
              <input
                type="radio"
                id="delete01"
                name="delete"
                value="unsatisfy"
                checked={radioValue === "unsatisfy"}
                onChange={handleChange}
              />
              <label htmlFor="delete01">
                콘텐츠 품질 및 서비스 정보 불만족
              </label>
            </div>
            <div className="radio ">
              <input
                type="radio"
                id="delete02"
                name="delete"
                value="rejoin"
                checked={radioValue === "rejoin"}
                onChange={handleChange}
              />
              <label htmlFor="delete02">다른 이메일로 재가입</label>
            </div>
            <div className="radio ">
              <input
                type="radio"
                id="delete03"
                name="delete"
                value="privacy"
                checked={radioValue === "privacy"}
                onChange={handleChange}
              />
              <label htmlFor="delete03">개인정보 노출 우려</label>
            </div>
            <div className="checkbox textfiled">
              <input
                type="radio"
                id="delete05"
                name="delete"
                value="etc"
                checked={radioValue === "etc"}
                onChange={handleChange}
              />
              <label htmlFor="delete05">기타</label>
              {radioValue === "etc" && (
                <input
                  type="text"
                  name="etcComment"
                  className="textfield-input"
                  placeholder=""
                />
              )}
            </div>
          </fieldset>
        </section>
        <DeleteFooter />
      </section>
    </Form>
  );
};

export default DeleteForm;

const Form = styled.form`
  max-width: 560px;
  margin: 0 auto;
  padding: 5rem 0% 20rem;
  position: relative;

  .delete-image {
    border: 1px solid #051619;
    margin: 0 0 1rem;
    padding: 4rem 0 0;
  }

  .delete-head {
    padding: 2rem 0 0.5rem;
  }

  .delete-head-title {
    font-size: 1rem;
  }

  .delete-why {
    padding: 0;
  }

  .delete-why-title {
    font-size: 1.25rem;
    line-height: 1.6;
  }

  .radio {
    display: block;
    padding: 0.5rem 0;
    position: relative;
  }

  input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: radio;
    position: absolute;
  }

  input[type="radio"] + label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  input[type="radio"] + label::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #9e9e9e;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }

  input[type="radio"]:checked + label::after {
    display: block;
    background: #051619;
  }

  input[type="radio"] + label::after {
    content: "";
    display: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #051619;
    position: absolute;
    left: 5px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: all 0.2s;
  }

  input[type="checkbox"]:checked + label + input,
  input[type="radio"]:checked + label + input {
    display: block;
    margin: 0.75rem 0 1.5rem;
  }

  .textfield-input {
    display: block;
    width: 100%;
    margin-top: 1rem;
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
