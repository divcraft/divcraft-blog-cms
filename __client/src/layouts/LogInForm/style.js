import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 330px;
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
  color: white;
  background-color: ${({ theme: { colors } }) => colors.blue.dark};
  :hover {
    cursor: pointer;
  }
`;
