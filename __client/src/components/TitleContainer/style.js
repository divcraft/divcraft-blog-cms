import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Border = styled.div`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray.light};
`;
