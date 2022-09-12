import styled from "styled-components";

const TextField = ({ type, name, ...rest }) => {
  return (
    <Div>
      <input type={type} name={name} {...rest} />
    </Div>
  );
};

export default TextField;

const Div = styled.div`
  margin: 1rem 0;
  position: relative;

  input {
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
  }
`;
