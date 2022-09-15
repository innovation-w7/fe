import { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleMenuToggle = () => {
    setMenuToggle((cur) => !cur);
  };
  return (
    <Nav>
      <Inner>
        <div role="navigation"></div>
        <a className="header" href="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.75f1e668.png`}
            alt="뉴닉 NEWNEEK"
          />
        </a>

        <User>
          <div style={{ marginRight: "-1px" }} role="search">
            <button
              type="button"
              class="navbar-user-search-trigger js-navbar-toggle"
              aria-label="검색"
            >
              <I />
            </button>
          </div>
          <Button
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="사용자 메뉴"
            type="button"
            onClick={() => handleMenuToggle()}
          >
            <span class="emoji">🦔</span>
          </Button>
          {menuToggle && (
            <Menu>
              <a href="/profile">마이페이지</a>
              <a href="/order">주문내역</a>
              <a href="/setting">프로필 설정</a>
              <a href="/help">고객센터</a>
              <div class="user-logout">
                <button title="sign out">로그아웃</button>
              </div>
            </Menu>
          )}
        </User>
      </Inner>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #eae7de;
  border-bottom: 1px solid #051619;
  position: relative;
  z-index: 4;
`;

const Inner = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  max-width: 1360px;
  margin: 0 auto;
  padding: 3rem 5% 2.5rem;

  .header {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 226px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`;

const User = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  position: relative;

  button {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #051619;
    box-sizing: border-box;
  }
`;

const I = styled.i`
  pointer-events: none;
  font-style: normal;

  ::before {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 0 auto;
    border: 2px solid #051619;
    -webkit-transform: translateX(-1px);
    transform: translateX(-1px);
  }

  ::after {
    content: "";
    display: block;
    width: 6px;
    height: 2px;
    background: #051619;
    margin: 0 auto;
    -webkit-transform: rotate(45deg) translate(3px, -5px);
    transform: rotate(45deg) translate(3px, -5px);
  }
`;

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  position: relative;

  span {
    pointer-events: none;
    float: left;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 0;
    box-sizing: border-box;

    font-size: 2rem;
    position: relative;
  }
`;

const Menu = styled.div`
  width: 280px;
  box-sizing: border-box;
  border-radius: 0;
  background: #fff;
  border: 1px solid #051619;
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 1;

  * {
    display: block;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #051619;
    color: #051619;
    cursor: pointer;
    height: 3em;
  }

  :last-child {
    border-bottom: 0;
  }

  button {
    color: #b22222;
    padding: 0;
    height: max-content;
    width: max-content;
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    position: relative;
  }
`;
