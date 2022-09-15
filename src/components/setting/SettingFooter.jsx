import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SettingFooter = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("access-token");
    navigate("/");
  };

  return (
    <Footer>
      <button
        className="setting-foot-logout"
        type="butotn"
        onClick={() => handleLogOut()}
      >
        로그아웃
      </button>
      <Link to={"/delete"} className="setting-foot-delete">
        계정 삭제하기
      </Link>
    </Footer>
  );
};

export default SettingFooter;

const Footer = styled.footer`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  margin: 2rem 0;

  .setting-foot-logout {
    margin-right: 2rem;
    font-size: 1rem;
    text-decoration: underline;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    font-size: inherit;
    position: relative;
  }

  .setting-foot-delete {
    text-decoration: underline;
    color: #051619;
  }
  a {
    -webkit-text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
    color: #ff6b00;
  }
  button:not(:active),
  button:not(:focus) {
    outline: 0;
  }
`;
