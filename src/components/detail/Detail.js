import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Header from "../main/Header";
import api from "../../shared/api";

function Detail() {
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState({});

  const detailGet = async () => {
    const { data } = await api.get(`/news/${id}`);
    setDetail(data.data);
  };
  useEffect(() => {
    detailGet();
  }, [id]);

  return (
    <div style={{ backgroundColor: "#eae7de" }}>
      <Header />
      <Posthead>
        <p>{detail.category}</p>
        <p className="title">{detail.title}</p>
        <p>{detail.date}</p>
      </Posthead>
      <Postbody>{detail.content}</Postbody>
      <Postbody>🧡좋았슴 {detail.likeCnt}</Postbody>
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
  max-width: 620px;
  min-height: 300px;
  margin: 0 auto;
  padding: 0 5% 8rem;
  text-align: center;
  position: relative;
  background-color: #eae7de;
`;
