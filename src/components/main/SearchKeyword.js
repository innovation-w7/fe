import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Bottonbar from './Bottonbar';

function SearchKeyword() {
  const [word, setWord] = useState();
  const onChangeHandler = (e) => {
    const {
      target: { value, name },
    } = e;
    setWord(value);
  };
  const navigate = useNavigate();
  console.log(word);
  return (
    <div>
      <Header />
      <Search>
        <form className="textfield">
          <input className="input" type="text" name="keyword" onChange={onChangeHandler} />
          <Send type="submit" onClick={() => navigate(`/search/${word}`)}>
            검색
          </Send>
          <div className="recommend">
            <p>고슴이 추천 키워드</p>
            <br />
            <p>
              <Link className="recommend-word" to={`/search/경제`}>
                경제
              </Link>
            </p>
            <p>
              <Link className="recommend-word" to={`/search/인사청문회`}>
                인사청문회
              </Link>
            </p>
            <Link className="recommend-word" to={`/search/국민연금`}>
              국민연금
            </Link>
          </div>
        </form>
      </Search>
    </div>
  );
}

export default SearchKeyword;

const Search = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 1rem 5%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 6;
  margin-top: 150px;
  @media screen and (max-width: 1080px) {
    bottom: calc(100% - 56px);
  }
  .textfield {
    margin: 0 auto;
    position: relative;
    max-width: 640px;
    margin: 0 auto;
    box-sizing: border-box;
    position: fixed;
  }
  .input {
    margin: 0 auto;
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    padding: 1rem 5%;
    box-sizing: border-box;
    position: fixed;
    width: 350px;
  }
  .recommend {
    font-size: 30px;
    margin-top: 70px;
  }
  .recommend-word {
    &:hover {
      color: white;
    }
  }
`;
const Send = styled.button`
  width: 70px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  margin-left: 300px;
`;
