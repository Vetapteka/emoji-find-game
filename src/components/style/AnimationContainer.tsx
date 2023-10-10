import styled, { keyframes } from 'styled-components';

const scaleUpAndDown = keyframes`
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const AnimationContainer = styled.div`
  transform-origin: center center;
  animation: ${scaleUpAndDown} 1s ease-in-out infinite;
`;
