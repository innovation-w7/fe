import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../shared/api";

import CategoryList from "./CategoryList";

import MainPost from "./MainPost";

function Category({ post }) {
  const params = useParams();
  const category = params.category;
  const [categoryList, setCategoryList] = useState({});
  const getCatogories = async () => {
    const { data } = await api.get(`/news/category/${category}`);

    setCategoryList({ ...data });
  };

  useEffect(() => {
    getCatogories();
  }, [category]);

  return (
    <div style={{ backgroundColor: "#eae7de" }}>
      <Header />
      <CategoryList />

      <Gridposts>
        {categoryList.data?.map((post) => {
          return <MainPost post={post} id={post.id} />;
        })}
        <div></div>
      </Gridposts>
    </div>
  );
}

export default Category;

const Gridposts = styled.div`
  width: 90%;
  max-width: 1450px;
  min-height: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 16%;
  position: relative;
  background-color: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Post = styled.div`
  background-color: #eae7de;
  display: flex;
  flex-direction: column;
  height: 340px;
  width: 305px;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid black;
  border-top: none;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
  }
`;
