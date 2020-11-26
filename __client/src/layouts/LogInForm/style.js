import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  & * {
    height: 60px;
    border: none;
    border-radius: 16px;
    font-size: 20px;
  }
`;

export const Input = styled.input`
  box-shadow: 1px 1px 5px ${({ theme: { colors } }) => colors.gray.dark};
  padding: 0 20px;
  :nth-child(2) {
    margin: 10px 0;
  }
`;

export const Button = styled.button`
  border: none;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.blue.dark};
  :hover {
    cursor: pointer;
  }
`;

export const ValidationInfo = styled.div`
  position: absolute;
  color: red;
  font-size: 16px;
  padding: 15px 20%;
  margin: 0 auto;
  bottom: -90px;
`;
