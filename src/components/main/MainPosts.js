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

  console.log(posts.data);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(__getPostsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <CategoryList />
      <List>
        {posts.data?.map((post) => {
          return <MainPost post={post} key={post.id} />;
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
