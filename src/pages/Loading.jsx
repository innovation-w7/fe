import React from 'react';
import styled, { keyframes } from 'styled-components';
import dochi from '../static/hiDochi.png';

function Loading() {
  return (
    <Background>
      <Dochi src={dochi}></Dochi>
    </Background>
  );
}

export default Loading;
const Background = styled.div`
  background-color: #eae7de;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const spin = keyframes`
100% {
      transform: rotate(360deg);
}

`;
const Dochi = styled.img`
  width: 200px;
  height: 200px;
  animation: ${spin} 3s infinite;
`;
