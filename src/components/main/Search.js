import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../shared/api";
import styled from "styled-components";
import MainPost from "./MainPost";
import Header from "./Header";

function Search() {
  const params = useParams();
  const keyword = params.keyword;
  const [searchList, setSearchList] = useState({});
  const getSearchList = async () => {
    const { data } = await api.get(`/news/search/${keyword}`);

    setSearchList({ ...data });
  };

  useEffect(() => {
    getSearchList();
  }, [keyword]);
  return (
    <div>
      <div>
        <Header />

        <Section>
          <header className="category-head">{keyword} 검색결과</header>
          <div className="category-list">
            {searchList.data?.map((post) => {
              return <MainPost post={post} key={post.id} />;
            })}
          </div>
          <div></div>
        </Section>
      </div>
    </div>
  );
}

export default Search;

const Section = styled.section`
  width: 90%;
  max-width: 1360px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 5%;
  position: relative;

  .category-head {
    margin: 4.1666rem 0 2rem;
    font-size: 30px;
  }
  .category-list {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    border-color: #051619;
    border-style: solid;
    border-width: 1px 0 0 1px;
  }
`;
