
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Header from '../main/Header';
import { api } from '../../shared/api';
import { __toggleLike } from '../../redux/modules/likeSlice';
import { __mailSubcribe } from '../../redux/modules/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../main/Footer';
import Bottonbar from '../main/Bottonbar';


function Detail() {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;
  const [detail, setDetail] = useState([]);
  const [heart_count, setHeart_count] = useState(0);
  const [subscribe, setSubscribe] = useState();

  const accessToken = localStorage.getItem('access-token');

  const { likes } = useSelector((state) => state.likes);

  const detailGet = async () => {
    try {
      const { data } = await api.get(`/news/${id}`);
      setDetail(data.data);
      setHeart_count(data.data.likeCnt);
    } catch (error) {
      window.alert(error);
    }
  };

  const payload = [id, accessToken];
  const likeButtonHandler = async () => {
    dispatch(__toggleLike(payload));
    if (likes.data === "좋아요 취소") {
      return setHeart_count - 1;
    } else {
      return setHeart_count + 1;
    }
  };

  useEffect(() => {
    detailGet();
    window.scrollTo(0, 0);
  }, [likes]);

  const onChangeHandler = (e) => {
    const {
      target: { value, name },
    } = e;
    setSubscribe({ ...subscribe, [name]: value });
  };

  const subscribeButton = () => {
    dispatch(__mailSubcribe(subscribe));
  };
  return (
    <div style={{ backgroundColor: '#eae7de' }}>
      <Header />
      <Posthead>
        <p>{detail.category}</p>
        <br />
        <p className="title">{detail.title}</p>
        <br />
        <br />
        <p>{detail.date}</p>
      </Posthead>
      <Postbody>{detail.content}</Postbody>
      {accessToken !== null ? (
        <IsLike onClick={likeButtonHandler}>🧡{heart_count} 좋았슴 !!</IsLike>
      ) : (
        <Link to="/login">
          <IsLike>🧡{detail.likeCnt} 좋았슴</IsLike>
        </Link>
      )}
      <SubscribeForm>
        <div className="form-content">
          <div className="form-input">
            <input
              className="input"
              name="email"
              onChange={onChangeHandler}
            ></input>
          </div>
          <button
            type="submit"
            className="post-input"
            onClick={subscribeButton}
          >
            뉴스레터 구독하기
          </button>
        </div>
        <SubText>
          구독할 경우 개인정보 수집·이용과 광고성 정보 수신에 동의하게 됩니다.
        </SubText>
      </SubscribeForm>
      <Footer />
      <Bottonbar />
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
  max-width: 800px;
  margin: 0 auto;
  padding: 0 5% 8rem;
  text-align: center;
  position: relative;
  background-color: #eae7de;
  color: #051619;
  font-size: 1.1428rem;
  font-weight: 300;
  line-height: 1.625;
`;
const IsLike = styled.button`
  align-items: center;
  position: relative;
  margin: 0 auto;
  display: flex;
  border: none;
  background-color: #eae7de;

  &:hover {
    color: #ff6b00;
    font-weight: 800;
    font-size: 14.5px;
  }
`;
const SubscribeForm = styled.form`
  max-width: 640px;
  margin: 0 auto 9rem;
  padding: 2.0833rem 5% 0;
  @media (max-width: 1360px) {
    margin-bottom: 6rem;
  }

  .form-content {
    display: flex;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 5.8333rem;
    border-top: 1px solid #051619;
  }
  .form-input {
    margin-top: 0;
    margin-bottom: 0;
    width: 65.833%;
    margin: 1rem 0;
    position: relative;
  }
  .input {
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
    border: 1px solid #051619;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    color: #051619;
    transition: all 0.2s;
    outline: none;
    box-shadow: none;
    padding: 1.3333rem;
    font-size: 1.3333rem;
    line-height: 1.1875;
    border-radius: 8px 0 0 8px;
  }

  .post-input {
    display: block;
    width: 42.167%;
    padding: 1.3333rem;
    color: #fff;
    font-size: 1.3333rem;
    line-height: 1.1875;
    border: 1px solid #051619;
    border-left: 0;
    background-color: #ff6b00;
    border-radius: 0 8px 8px 0;
    margin-top: 14px;
  }
`;
const SubText = styled.p`
  margin-top: 1.3333rem;
  color: #999;
  font-size: 1rem;
  line-height: 1.2;
  text-align: center;
`;
