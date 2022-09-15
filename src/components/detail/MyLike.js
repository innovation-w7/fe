import React, { useEffect, useState } from 'react';
import Header from '../main/Header';
import styled from 'styled-components';
import { api } from '../../shared/api';

import MainPost from '../main/MainPost';
function MyLike() {
  const [myLikeList, setMyLikeList] = useState({});
  const accessToken = localStorage.getItem('access-token');
  console.log(accessToken);
  const headers = {
    'Content-Type': 'application/json',
    'access-token': accessToken,
  };
  const getMyLike = async () => {
    const { data } = await api.get('/auth/mypage/like', { headers: headers });
    setMyLikeList(data);
  };

  console.log(myLikeList, '내가 좋아하는 글 리스트');

  useEffect(() => {
    getMyLike();
  }, []);

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <Section>
        <div className="category-list">
          {myLikeList.data?.map((post) => {
            return <MainPost post={post} key={post.id} />;
          })}
        </div>
        <div></div>
      </Section>
    </div>
  );
}

export default MyLike;

const Section = styled.section`
  width: 89%;
  max-width: 1360px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5%;
  position: relative;

  .category-head {
    margin: 4.1666rem 0 2rem;
    font-size: 30px;
  }
  .category-list {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    width: 99%;
    border-color: #051619;
    border-style: solid;
    border-width: 1px 0 0 1px;
  }
`;
