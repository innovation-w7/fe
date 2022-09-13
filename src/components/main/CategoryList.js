import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CategoryList() {
  return (
    <div>
      <Category>
        <div className="category-inner">
          <StyeldLink to={`/`}>
            <span>전체</span>
          </StyeldLink>
          <StyeldLink to={`/tag/정치`}>
            <span>⚖️ 정치</span>
          </StyeldLink>
          <StyeldLink to={`/tag/경제`}>
            <span>💰 경제</span>
          </StyeldLink>
          <StyeldLink to={`/tag/세계`}>
            <span>🌐 세계</span>
          </StyeldLink>
          <StyeldLink to={`/tag/테크`}>
            <span>🤖 테크</span>
          </StyeldLink>
          <StyeldLink to={`/tag/노동`}>
            <span>💪 노동</span>
          </StyeldLink>
          <StyeldLink to={`/tag/환경`}>
            <span>🌱 환경</span>
          </StyeldLink>
          <StyeldLink to={`/tag/인권`}>
            <span>🤝 인권</span>
          </StyeldLink>
          <StyeldLink to={`/tag/문화`}>
            <span>🎞 문화</span>
          </StyeldLink>
          <StyeldLink to={`/tag/라이프`}>
            <span> 🧘 라이프</span>
          </StyeldLink>
        </div>
      </Category>
    </div>
  );
}

export default CategoryList;
export const Category = styled.nav`
  display: flex;
  justify-content: center;
  border-top: 1px solid #051619;
  border-bottom: 1px solid #051619;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  left: 0;
  right: 0;
  font-size: 14px;

  .category-inner {
    display: flex;
    white-space: nowrap;
    overflow: overlay;
    margin: 0 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  span {
    margin: 10px;
    font-size: 18px;
    color: black;
    &:hover {
      color: #ff6b00;
    }
  }
`;

const StyeldLink = styled(Link)`
  text-decoration: none;
`;
