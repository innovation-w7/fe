import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { __getPostsThunk } from '../../redux/modules/postSlice';

function Category({ post }) {
  const params = useParams();
  const category = params.category;
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostsThunk());
  }, [dispatch]);

  console.log(category, posts);
  return (
    <div>
      <Header />
      <CategoryList>
        <div className="category-inner">
          <Link to={`/`}>전체</Link>
          <Link to={`/tag/politics`}>
            <span>⚖️ 정치</span>{' '}
          </Link>{' '}
          <Link to={`/tag/economy`}>
            <span>💰 경제</span>{' '}
          </Link>
          <Link to={`/tag/world`}>
            <span>🌐 세계</span>{' '}
          </Link>{' '}
          <Link to={`/tag/tech`}>
            <span>🤖 테크</span>{' '}
          </Link>{' '}
          <Link to={`/tag/labor`}>
            <span>💪 노동</span>{' '}
          </Link>{' '}
          <Link to={`/tag/environment`}>
            <span>🌱 환경</span>{' '}
          </Link>{' '}
          <Link to={`/tag/social-rights`}>
            <span>🤝 인권</span>{' '}
          </Link>{' '}
          <Link to={`/tag/culture`}>
            <span>🎞 문화</span>
          </Link>
          <Link to={`/tag/life`}>
            <span> 🧘 라이프</span>
          </Link>
        </div>
      </CategoryList>
      <div>catogoryName</div>
      <div>gridmap</div>
    </div>
  );
}

export default Category;

const CategoryList = styled.nav`
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

  .category-inner {
    display: flex;
    white-space: nowrap;
    overflow: overlay;
    margin: 0 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;
