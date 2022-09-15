import styled from "styled-components";

const SettingHedaer = ({ nickname }) => {
  return (
    <Header>
      <h1 className="setting-head-title">프로필 설정</h1>
      <p className="setting-head-description">
        {nickname} 뉴니커,
        <br />
        어떤 사람인지 더 알고 싶어요!
      </p>
    </Header>
  );
};

export default SettingHedaer;

const Header = styled.header`
  margin: 4rem 0 2rem;

  .setting-head-title {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: -0.025rem;
    text-indent: -1px;
  }
  .setting-head-description {
    margin: 1rem 0 0;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: -0.025rem;
    line-height: 1.4;
  }
`;
