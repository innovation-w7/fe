import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <FormHeader>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.75f1e668.png`}
          alt="뉴닉 NEWNEEK"
        />
      </Link>
    </FormHeader>
  );
};

export default Header;

const FormHeader = styled.header`
  a {
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
  }
`;
