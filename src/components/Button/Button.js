import styled from "styled-components";

const BigButton = styled.button`
  height: 40px;
  font-size: 20px;
`;

const Button = ({ actionOnClick, text }) => {
  return (
    <BigButton type="button" onClick={actionOnClick}>
      {text}
    </BigButton>
  );
};

export default Button;
