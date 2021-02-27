import styled, { keyframes, css } from 'styled-components';

const spinner = keyframes`
0% {
   opacity: 1;
 }
 100% {
   opacity: 0;
 }
`;

export const Outer = styled.div`
  opacity: 0.5;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  left: 50%;
  ${(props) =>
    props.pattern === `main` &&
    css`
      top: 50%;
    `}
  ${(props) =>
    props.pattern === `page` &&
    css`
      top: 70px;
    `}
  ${(props) =>
    props.pattern === `button` &&
    css`
      width: 30px;
      height: 30px;
      top: 50%;
      right: -40px;
      transform: translateY(-50%);
    `}
`;

export const Inner = styled.div`
  animation: ${spinner} 1.2s linear infinite;
  transform-origin: 20px 20px;
  ${(props) =>
    props.pattern === `button` &&
    css`
      transform-origin: 15px 15px;
    `}
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 45.5%;
    width: 9%;
    border-radius: 30%;
    height: 10px;
    background: ${({ theme: { colors } }) => colors.blue.dark};
    ${(props) =>
      props.pattern === `button` &&
      css`
        height: 7.5px;
        background: white;
      `}
  }
  &:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  &:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  &:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  &:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  &:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  &:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  &:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  &:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  &:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  &:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  &:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
`;
