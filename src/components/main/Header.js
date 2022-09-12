import React from 'react';
import styled from 'styled-components';
import logo from '../../static/newneekLogo.png';

function Header() {
  const toggleButton = () => {
    const content = document.getElementById('toggleContent');
    if (content.style.display !== 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  };
  return (
    <div>
      <Navbar>
        <NavbarInner>
          <Logo>
            <LogoImg src={logo} alt="뉴닉!" />
          </Logo>
          <NavContainer>
            <NavSearch>
              <SearchButton>
                <b>찾기</b>
              </SearchButton>
            </NavSearch>
            <MyButton type="checkbox" className="mypage-toggle" onClick={toggleButton}>
              <span className="emoji">🦔</span>
            </MyButton>
            <MyButtonToggle id="toggleContent">
              <ToggleCommon>마이페이지</ToggleCommon>
              <ToggleCommon>프로필설정</ToggleCommon>
              <ToggleCommon>로그아웃</ToggleCommon>
            </MyButtonToggle>
          </NavContainer>
        </NavbarInner>
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
`;
const NavbarInner = styled.div`
  display: flex;
  padding-top: 3.5rem;
  padding-bottom: 4rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1360px;
  padding: 3rem 5% 2.5rem;
`;
const Logo = styled.div`
  width: 226px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  cursor: pointer;
  vertical-align: middle;
  margin-left: 30%;
`;
const LogoImg = styled.img`
  vertical-align: middle;
  width: 100%;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #eae7de;
`;
const NavSearch = styled.div`
  background: none;
  cursor: pointer;
`;
const SearchButton = styled.button`
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #051619;
  padding: 0;
  background: none;
  cursor: pointer;
  overflow: hidden;
`;
const MyButton = styled.button`
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
`;

const MyButtonToggle = styled.div`
  width: 280px;
  box-sizing: border-box;
  border-radius: 0;
  background: #fff;
  border: 1px solid #051619;
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 4;
  margin-top: 30px;
  margin-right: 8em;
  display: none;
`;

const ToggleCommon = styled.p`
  display: block;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid #051619;
  color: #051619;
  cursor: pointer;
`;
