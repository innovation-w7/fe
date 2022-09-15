import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MainPost({ post }) {
  const category1 = [
    { category: '정치', icon: '⚖️' },
    { category: '경제', icon: '💰' },
    { category: '세계', icon: '🌐 ' },
    { category: '테크', icon: '🤖 ' },
    { category: '노동', icon: '💪 ' },
    { category: '환경', icon: '🌱' },
    { category: '인권', icon: '🤝 ' },
    { category: '문화', icon: '🎞 ' },
    { category: '라이프', icon: '🧘 ' },
  ];

  function findIcon(element) {
    if (element.category == post.category) {
      return element.icon;
    }
  }
  const { icon } = category1.filter(findIcon)[0];

  return (
    <div>
      <Link to={`/detail/${post.id}`} key={post.id} style={{ color: 'black', textDecoration: 'none' }}>
        <Post>
          <p className="icon">{icon}</p>
          <br />
          <p className="title">{post.title}</p>
          <br />
          <h1 className="content">{post.contentSum}</h1>
          <br />
          <p className="date">{post.date}</p>
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
  padding: 1rem;
  border: 1px solid black;
  border-top: none;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    font-weight: 600;
    margin: 0.5rem 0 1rem;
  }
  .content {
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: normal;
    height: 100px;
    text-align: left;
    font-size: 1rem;
    word-wrap: break-word;
  }
  .date {
    margin-top: 60px;
    font-weight: 400;
  }
  .icon {
    font-size: 30px;
  }
`;
