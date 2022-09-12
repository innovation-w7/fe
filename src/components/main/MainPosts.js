import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostsThunk } from '../../redux/modules/postSlice';
import MainPost from './MainPost';
import { Link } from 'react-router-dom';
//import Category from './Category';
import Loading from '../../pages/Loading';

function MainPosts() {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostsThunk());
  }, [dispatch]);

  console.log(posts, '메인화면!!');
  // posts.map((post) => {
  //   return <Category post={post} />;
  // });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
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
      <List>
        {posts.data?.map((post) => {
          return <MainPost post={post} id={post.id} />;
        })}
      </List>
    </div>
  );
}

export default MainPosts;

const List = styled.section`
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
`;
export const CategoryList = styled.nav`
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
