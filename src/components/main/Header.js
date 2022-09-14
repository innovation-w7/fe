import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../static/newneekLogo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [visible, setVisible] = useState(false);

  const accessToken = localStorage.getItem('access-token');

  return (
    <div>
      <Navbar>
        <div className="navbar-inner">
          <Link to="/" className="logo">
            <img className="logo-img" src={logo} alt="뉴닉!" />
          </Link>
          <div className="nav-container">
            <div className="nav-search">
              <button className="search-button">
                <b>찾기</b>
              </button>
            </div>
            <button
              type="checkbox"
              className="mybutton"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {accessToken != null ? (
                <>
                  <span className="emoji">🦔</span>
                </>
              ) : (
                <>
                  <span>
                    <Link className="emoji" to="/login">
                      👤
                    </Link>
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
        {accessToken != null ? (
          visible ? (
            <div className="mybutton-toggle" id="toggleContent">
              <Link to="/profile" className="toggle-content">
                마이페이지
              </Link>
              <p className="toggle-content">프로필설정</p>
              <p className="toggle-content">로그아웃</p>
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </Navbar>
    </div>
  );
}

export default Header;

const Navbar = styled.nav`
  background-color: #eae7de;
  border-bottom: 1px solid #051619;
  position: relative;
  z-index: 2;

  .navbar-inner {
    display: flex;
    padding-top: 3.5rem;
    padding-bottom: 4rem;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1360px;
    padding: 3rem 5% 2.5rem;
  }
  .logo {
    width: 226px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    cursor: pointer;
    vertical-align: middle;
    margin-left: 32%;
  }
  .logo-img {
    vertical-align: middle;
    width: 100%;
  }
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #eae7de;
    justify-content: flex-end;
    @media screen and (max-width: 1080px) {
      display: none;
    }
  }

  .nav-search {
    background: none;
    cursor: pointer;
  }
  .search-button {
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #051619;
    padding: 0;
    background: none;
    cursor: pointer;
    overflow: hidden;
  }

  .mybutton {
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 0;
    border: 1px solid #051619;
    border-left: 1px #051619;
    background-color: #eae7de;
    font-size: 2rem;
    position: relative;
    justify-content: center;
    align-items: center;
    float: left;
    cursor: pointer;
  }

  .mybutton-toggle {
    width: 280px;
    box-sizing: border-box;
    border-radius: 0;
    background: #fff;
    border: 1px solid #051619;
    position: absolute;
    top: 72px;
    right: 0;
    z-index: 1;
    margin-top: 30px;
    margin-right: 8em;
  }
  .toggle-content {
    display: block;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #051619;
    color: #051619;
    cursor: pointer;
  }
`;
