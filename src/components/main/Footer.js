import React from 'react';
import styled from 'styled-components';
import waitDochi from '../../static/banner.png';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

function Footer() {
  return (
    <div>
      <Link to="/">
        <FooterBanner>
          <img className="wait" src={waitDochi} alt="기다리는도치"></img>
          <div className="home-banner-text">구독하러 가기</div>
        </FooterBanner>
      </Link>

      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        <Footerbar>
          <div class="marquee-inner">
            <p className="footer-statics">
              <span className="footer-text">
                오늘까지 <b>588회</b> 뉴스레터를 발행했고 &nbsp;{' '}
              </span>
              <b>492,242명</b>이 구독했어요!!!
            </p>
          </div>
        </Footerbar>
      </Marquee>
    </div>
  );
}

export default Footer;

const FooterBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 14rem 0px 8rem;
  padding-top: 80px;
  border-top: 2px solid rgb(5, 22, 25);
  position: relative;
  cursor: pointer;
  background: rgb(255, 107, 0);

  .home-banner-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0px;
    border-top: 1px solid rgb(5, 22, 25);
    border-bottom: 2px solid rgb(5, 22, 25);
    background: rgb(255, 255, 255);
    position: relative;
    color: rgb(5, 22, 25);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;
  }
  .wait {
    position: absolute;
    bottom: 62px;
    width: 300px;
    height: auto;
    &:hover .sparkle {
      opacity: 1;
    }
  }
`;

const Footerbar = styled.aside`
  .footer-statics {
    display: flex;
    align-items: center;
    background: #eae7de;
    text-align: left;
    font-size: 1.5rem;
    color: #051619;
    position: relative;
    @media screen and (max-width: 1360px) {
      font-size: 1.25rem;
      line-height: 1.6;
    }
  }

  .hover-area {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee 10s linear infinite;
    animation-play-state: paused;
  }
  .footer-text {
    display: inline;
  }
  .hover-area {
    display: none;
    background: #eae7de;
    position: absolute;
    left: -20%;
    right: 0;
    top: 0;
    bottom: 0;
    white-space: nowrap;
  }
  div {
    overflow: hidden;
  }
  .marquee {
    animation-name: marquee-right;
    white-space: nowrap;
    animation-duration: 4s;
    will-change: auto;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
