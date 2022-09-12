import styled from "styled-components";

const CheckBox = ({ name, id, children, value, ...rest }) => {
  return (
    <Div>
      <input type="checkbox" id={id} name={name} {...rest} />
      {children}
    </Div>
  );
};

export default CheckBox;

const Div = styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
  }

  label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  a {
    display: inline !important;
    margin: 0 !important;
    text-decoration: underline;
    color: #051619;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;
