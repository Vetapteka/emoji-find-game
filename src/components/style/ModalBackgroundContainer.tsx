import styled from 'styled-components';

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: ${({theme}) => theme.prefix === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.9)'};
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;
