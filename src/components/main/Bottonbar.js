import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Bottonbar() {
  const accessToken = localStorage.getItem('access-token');
  return (
    <div>
      <BottonNav>
        <Link to="/">
          <span className="emoji">🏠</span>
          <span>&nbsp;&nbsp;&nbsp;홈</span>
        </Link>
        <p>
          <span className="emoji">🔍</span>
          <span>검색</span>
        </p>
        {accessToken != null ? (
          <Link to="/profile">
            <span className="emoji">🙍</span>
            <span>마이페이지</span>
          </Link>
        ) : (
          <Link to="/login">
            <span className="emoji">🙍</span>
            <span>로그인</span>
          </Link>
        )}
      </BottonNav>
    </div>
  );
}

export default Bottonbar;

const BottonNav = styled.nav`
  display: none;
  justify-content: space-around;
  width: 100%;
  padding: 0.25rem 0 calc(env(safe-area-inset-bottom) + 0.25rem);
  background: #fff;
  border-top: 1px solid #051619;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 7;
  @media screen and (max-width: 1080px) {
    display: flex;
  }
  .emoji {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray100);
    overflow: hidden;
    border-radius: 0;
    position: relative;
    width: 32px;
    height: 32px;
    margin: 0 auto;
    font-size: 1.25rem;
    transition: all 0.4s ease;
  }
`;
