import styled from "styled-components";

const CheckBox = ({ name, id, children, checked, onChange, ...rest }) => {
  return (
    <Div>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        name={name}
        onChange={onChange}
        {...rest}
      />
      {children}
    </Div>
  );
};

export default CheckBox;

const Div = styled.div`
  display: block;
  padding: 0.5rem 0;
  position: relative;

  label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  input[type="checkbox"] {
    width: 0;
    height: 0;
    opacity: 0;
    -webkit-appearance: checkbox;
    position: absolute;
    outline: auto;
  }

  input[type="checkbox"] + label {
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
  }

  input[type="checkbox"] + label::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 0;
    border: 1px solid #051619;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
  }

  input[type="checkbox"] + label::after {
    content: "";
    display: none;
    width: 10px;
    height: 4px;
    border-left: 2px solid #051619;
    border-left-color: rgb(5, 22, 25);
    border-bottom: 2px solid #051619;
    border-bottom-color: rgb(5, 22, 25);
    border-right-color: #051619;
    border-top-color: #051619;
    position: absolute;
    left: 3px;
    top: 5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  input[type="checkbox"]:checked + label::before {
    background: #051619;
    border-color: #051619;
    -webkit-animation: ripple2 0.2s linear forwards;
    animation: ripple2 0.2s linear forwards;
  }

  input[type="checkbox"]:checked + label::after {
    display: block;
    border-color: #fff;
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
