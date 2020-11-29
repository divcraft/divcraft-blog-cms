import styled from 'styled-components';

export const Background = styled.div`
  background: rgba(204, 225, 255, 0.5);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(204, 225, 255, 0.8) 100%
  );
  min-height: 100vh;
`;

export const Container = styled.div`
  margin: auto;
  padding-top: 100px;
  width: 300px;
  text-align: center;
  position: relative;
  @media (min-width: 1367px) {
    padding-top: 220px;
  }
  form {
    display: flex;
    flex-direction: column;
    & * {
      height: 60px;
      border: none;
      border-radius: 16px;
      font-size: 20px;
    }
  }
`;
