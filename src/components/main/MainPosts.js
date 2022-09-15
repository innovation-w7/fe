import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostsThunk } from '../../redux/modules/postSlice';
import MainPost from './MainPost';

import Loading from '../../pages/Loading';
import CategoryList from './CategoryList';

function MainPosts() {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(4);
  console.log(posts.data, '포스트리스트');

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(__getPostsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  const showMoreItems = () => {
    setVisible((prev) => prev + 8);
  };

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <CategoryList />
      <List>
        {posts.data?.slice(0, visible).map((post) => {
          return <MainPost post={post} key={post.id} />;
        })}
      </List>
      <div style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Morebtn onClick={showMoreItems}>더보기</Morebtn>
      </div>
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
  justify-content: center;
`;
const Morebtn = styled.button`
  position: relative;
  margin: 0 auto;
  width: 20rem;
  flex-wrap: wrap;
  min-width: 104px;
  padding: 10px 1.5rem 11px;
  border-radius: 0;
  text-align: center;
  color: #fff;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  border: 1px solid #051619;
  box-sizing: border-box;
  background: #fff;
  color: #051619;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff6b00;
  }
`;
