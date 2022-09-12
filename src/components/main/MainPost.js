import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function MainPost({ post }) {
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <Link to={`/detail/${post.id}`} key={post.id} style={{ color: 'black', textDecoration: 'none' }}>
        <Post>
          <p className="title">{post.title}</p>
          <br />
          <h1>{post.contentSum}</h1>
          <br />
          <h1>{post.date}</h1>
          <br />
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
  .title {
    font-size: 18px;
    font-weight: 700;
  }
`;
