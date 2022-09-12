import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MainPost({ post }) {
  return (
    <div>
      <Link to={`/detail/${post.id}`} key={post.id} style={{ color: 'black', textDecoration: 'none' }}>
        <Post>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
          <h1>{post.date}</h1>
          <h1>{post.category}</h1>
          <h1>{post.id}</h1>
        </Post>
      </Link>
    </div>
  );
}

export default MainPost;

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
`;
