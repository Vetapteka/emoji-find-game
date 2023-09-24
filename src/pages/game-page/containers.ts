import { HEADER_SIZE, KEYBOARD_SIZE } from './size_constants';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: ${HEADER_SIZE};
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
`;

export const KeyboardContainer = styled.div`
  height: ${KEYBOARD_SIZE};
  align-self: flex-end;
`;
