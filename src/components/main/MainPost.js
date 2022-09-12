import React from 'react';
import styled from 'styled-components';

function MainPost({ post }) {
  return (
    <div>
      <Post>
        <h1>{post.title}</h1>
        <h1>{post.body}</h1>
      </Post>
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

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
