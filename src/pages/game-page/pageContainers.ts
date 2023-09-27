import { HEADER_SIZE, KEYBOARD_SIZE } from './size_constants';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: ${HEADER_SIZE};
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const KeyboardContainer = styled.div`
  height: ${KEYBOARD_SIZE};
  align-self: flex-end;
`;
