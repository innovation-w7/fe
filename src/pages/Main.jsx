import React from 'react';
import Header from '../components/main/Header';
import MainIntro from '../components/main/MainIntro';
import MainPosts from '../components/main/MainPosts';

const Main = () => {
  return (
    <div style={{ overflow: 'scroll' }}>
      <Header />
      <MainIntro />
      <MainPosts />
    </div>
  );
};

export default Main;
