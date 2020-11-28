import styled from 'styled-components';

export const FormContainer = styled.form`
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

export const ValidationText = styled.div`
  position: absolute;
  color: red;
  font-size: 16px;
  padding: 15px 20%;
  margin: 0 auto;
  bottom: -140px;
`;
