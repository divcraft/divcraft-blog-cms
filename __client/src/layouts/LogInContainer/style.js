import styled from 'styled-components';

export const Background = styled.div`
  background: rgba(204, 225, 255, 0.5);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(204, 225, 255, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 300px;
  text-align: center;
  transform: translateY(-15%);
`;
