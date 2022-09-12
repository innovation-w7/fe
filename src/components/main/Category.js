import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryList } from './MainPosts';
import Detail from '../detail/Detail';

function Category({ post }) {
  const params = useParams();
  const category = params.category;
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(__getPostsDetailThunk());
  //   }, [dispatch]);

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

      <div style={{ fontSize: '20px' }}>{category}탭입니다!!!!</div>
      <Gridposts>
        {posts.data?.map((post) => {
          return <Detail post={post} id={post.id} />;
        })}
      </Gridposts>
    </div>
  );
}

export default Category;

const Gridposts = styled.div`
  width: 90%;
  max-width: 1450px;
  min-height: 330px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5%;
  position: relative;
  background-color: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: violet;
`;
