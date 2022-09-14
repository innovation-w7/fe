import React from 'react';
import Bottonbar from '../components/main/Bottonbar';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import MainIntro from '../components/main/MainIntro';
import MainPosts from '../components/main/MainPosts';
import { useSelector } from 'react-redux';

const Main = () => {
  return (
    <div style={{ overflow: 'scroll' }}>
      <Header />
      <MainIntro />
      <MainPosts />
      <Footer />
      <Bottonbar />
    </div>
  );
};

export default Main;
