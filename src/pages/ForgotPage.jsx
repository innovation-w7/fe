import styled from "styled-components";

const ForgotPage = () => {
  return (
    <Form className="password" action="" method="">
      <Header>
        <h1 class="password-title">비밀번호 찾기</h1>
        <p class="password-description">
          비밀번호를 재설정할 수 있는 링크를 보내드려요.
        </p>
      </Header>
      <Section>
        <div className="textfield">
          <label className="textfield-label" for="find-email">
            이메일 주소
          </label>
          <input
            class="textfield-input"
            type="text"
            id="find-email"
            placeholder="newneeker@newneek.co"
            value=""
          />
        </div>
        <Footer>
          <button type="submit" className="primary-button password-submit">
            링크발송
          </button>
          <span className="password-link">
            이메일 주소가 떠오르지 않으시나요? <a href="/signup">가입하기</a>
          </span>
        </Footer>
      </Section>
    </Form>
  );
};

export default ForgotPage;

const Form = styled.form`
  max-width: 560px;
  margin: 0 auto;
  padding: 10rem 0% 20rem;
`;

const Header = styled.header`
  margin-bottom: 3rem;

  h1 {
    margin: 0 0 0.5rem;
    font-size: 14px;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.4;
    color: #051619;
  }
`;

const Section = styled.section`
  .textfield {
    margin: 1rem 0;
    position: relative;
  }

  .textfield-label {
    display: block;
    margin: 0 0 0.25rem;
  }
  input {
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
  margin: 1rem 0 0;
  button {
    float: left;
    width: 200px;
    max-width: 50%;
  }
  span {
    float: right;
    margin-top: 16px;
  }
`;
