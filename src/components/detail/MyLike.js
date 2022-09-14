import React, { useEffect, useState } from 'react';
import Header from '../main/Header';
import styled from 'styled-components';
import { api } from '../../shared/api';

import MainPost from '../main/MainPost';
function MyLike() {
  const [myLikeList, setMyLikeList] = useState({});
  const accessToken = localStorage.getItem('access-token');
  const headers = {
    'Content-Type': 'application/json',
    'access-token': accessToken,
  };
  const getMyLike = async () => {
    const { data } = await api.get('/auth/mypage/like', { headers: headers });
    setMyLikeList({ ...data });
  };

  console.log(myLikeList, '내가 좋아하는 글 리스트');

  useEffect(() => {
    getMyLike();
  }, []);

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <Gridposts>
        {myLikeList.data?.map((post) => {
          return <MainPost post={post} key={post.id} />;
        })}
        <div></div>
      </Gridposts>
    </div>
  );
}

export default MyLike;

const Gridposts = styled.div`
  width: 90%;
  max-width: 1450px;
  min-height: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16%;
  position: relative;
  background-color: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Post = styled.div`
  background-color: #eae7de;
  display: flex;
  flex-direction: column;
  height: 340px;
  width: 305px;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid black;
  border-top: none;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
  }
`;
