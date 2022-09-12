import React from 'react';
import styled from 'styled-components';

function MainList() {
  return (
    <div>
      <Category>
        <CategoryInner>
          <h5 class="category-link is-active" href="/">
            {' '}
            전체
          </h5>{' '}
          <h5 class="category-link " href="/tag/politics">
            <span>⚖️ 정치</span>{' '}
          </h5>{' '}
          <h5 class="category-link " href="/tag/economy">
            <span>💰 경제</span>{' '}
          </h5>{' '}
          <h5 class="category-link " href="/tag/world">
            <span>🌐 세계</span>{' '}
          </h5>{' '}
          <a class="category-link " href="/tag/tech">
            <span>🤖 테크</span>{' '}
          </a>{' '}
          <a class="category-link " href="/tag/labor">
            <span>💪 노동</span>{' '}
          </a>{' '}
          <a class="category-link " href="/tag/environment">
            <span>🌱 환경</span>{' '}
          </a>{' '}
          <a class="category-link " href="/tag/social-rights">
            <span>🤝 인권</span>{' '}
          </a>{' '}
          <a class="category-link " href="/tag/culture">
            <span>🎞 문화</span>
          </a>
          <a class="category-link " href="/tag/life">
            <span> 🧘 라이프</span>
          </a>
        </CategoryInner>
      </Category>
    </div>
  );
}

export default MainList;

const Category = styled.nav`
  display: flex;
  justify-content: center;
  border-top: 1px solid #051619;
  border-bottom: 1px solid #051619;
  background-color: #eae7de;
  box-sizing: border-box;
  overflow: hidden;
  left: 0;
  right: 0;
  font-size: 14px;
`;

const CategoryInner = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: overlay;
  margin: 0 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
