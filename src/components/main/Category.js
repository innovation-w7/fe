import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../../shared/api';

import CategoryList from './CategoryList';

import MainPost from './MainPost';

function Category() {
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
    <div style={{ backgroundColor: '#eae7de' }}>
      <Header />
      <CategoryList />
      <Section>
        <header className="category-head">{category}</header>
        <div className="category-list">
          {categoryList.data?.map((post) => {
            return <MainPost post={post} key={post.id} />;
          })}
        </div>
        <div></div>
      </Section>
    </div>
  );
}

export default Category;

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
