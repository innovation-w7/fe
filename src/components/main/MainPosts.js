import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __getPostsThunk } from '../../redux/modules/postSlice';
import MainPost from './MainPost';

function MainPosts() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostsThunk());
  }, [dispatch]);
  console.log(posts);

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <List>
        {posts.map((post) => {
          return <MainPost post={post} />;
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
