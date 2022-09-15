import React from 'react';
import styled from 'styled-components';
import MyLike from '../components/detail/MyLike';
import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import Bottonbar from '../components/main/Bottonbar';

const Mypage = () => {
  const nickname = localStorage.getItem('nickname');
  return (
    <div>
      <Header />
      <MySection>
        <HeadText>
          <InsideText>반가워 죽겠슴,</InsideText>
          <InsideText>{nickname} 🦔 뉴니커!</InsideText>
          <p>프로필 설정하기</p>
        </HeadText>
        <InsideText style={{ fontSize: '30px' }}>🧡&nbsp; 좋았슴</InsideText>
        <MyLike />
      </MySection>
      <Footer />
      <Bottonbar />
    </div>
  );
};

export default Mypage;

const MySection = styled.div`
  max-width: 1360px;
  margin: 0 auto 16rem;
  padding: 0 5%;
`;
const HeadText = styled.div`
  margin: 4rem 0 5rem;
  position: relative;
`;
const InsideText = styled.p`
  margin: 0 0 0.75rem;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.075rem;
`;
