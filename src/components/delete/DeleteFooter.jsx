import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../shared/api";

const DeleteFooter = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    api
      .delete("auth/mypage/profile", {
        data: {
          isSubscribe: true,
          nickname: "string",
          password: "string",
        },
        withCredentials: true,
      })
      .then(() => {
        localStorage.removeItem("access-token");
        navigate("/");
      })
      .catch((err) => alert("탈퇴에 실패하였습니다."));
  };

  const handleReturnMain = () => {
    navigate("/");
  };
  return (
    <Footer>
      <button
        className="primary-button"
        type="button"
        onClick={() => handleDeleteAccount()}
      >
        {" "}
        모든 정보와 계정을 삭제합니다
      </button>
      <button
        className="text-button"
        type="button"
        style={{ color: "rgb(0, 0, 0)", textDecoration: "underline" }}
        onClick={() => handleReturnMain()}
      >
        {" "}
        조금 더 이용해볼게요
      </button>
    </Footer>
  );
};

export default DeleteFooter;

const Footer = styled.footer`
  padding: 4rem 0;

  .text-button {
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
    border: 1px solid transparent;
    color: #ff6b00;
  }
`;
