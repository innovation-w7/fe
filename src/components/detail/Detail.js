import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../main/Header';

function Detail() {
  const { posts } = useSelector((state) => state.posts);
  const params = useParams();
  const id = params.id;
  console.log(id);

  const { title, body, date, category } = posts.filter((post) => post.id == id)[0];

  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <Header />
      <Posthead>
        <p>{category}</p>
        <p className="title">{title}</p>
        <p>{date}</p>
      </Posthead>
      <Postbody>{body}</Postbody>
      <p>🧡좋았슴 [갯수]</p>
    </div>
  );
}

export default Detail;

const Posthead = styled.header`
  margin: 0 0 4rem;
  padding: 3rem 5% 5.5rem;
  border-bottom: 1px solid #051619;
  overflow: hidden;
  text-align: center;
  position: relative;
  background-color: #eae7de;
  .title {
    font-size: 40px;
  }
`;
const Postbody = styled.div`
  max-width: 620px;
  min-height: 300px;
  margin: 0 auto;
  padding: 0 5% 8rem;
  text-align: center;
  position: relative;
  background-color: #eae7de;
`;
