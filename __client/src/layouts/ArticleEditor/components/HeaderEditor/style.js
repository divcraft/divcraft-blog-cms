import styled from 'styled-components';

export const HeaderContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
`;

export const Input = styled.input`
  text-align: center;
  border: none;
  overflow-x: hidden;
  resize: both;
  display: block;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
`;

export const CategorySelect = styled.select`
  padding: 5px 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme: { colors } }) => colors.blue.regular};
  margin: 10px auto 5px;
  text-align: center;
  appearance: none;
  border: none;
`;

export const TitleInput = styled(Input)`
  font-size: 28px;
  font-weight: 500;
  margin: 10px auto;
`;

export const SubtitleInput = styled(Input)`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  margin: 0px auto 20px;
`;

export const GrayArea = styled.div`
  width: 100%;
  height: 100%;
`;
