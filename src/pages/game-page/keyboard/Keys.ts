import styled from 'styled-components';
import { KEYBOARD_SIZE } from '../size_constants';

export const Keys = styled.div`
  height: 82%;
  width: 95%;
  margin: 1% auto;
  overflow-y: auto;
  border-radius: calc(0.04 * ${KEYBOARD_SIZE});

  & > * {
    width: calc(0.115 * ${KEYBOARD_SIZE});
    height: calc(0.115 * ${KEYBOARD_SIZE});
    padding: 0.3%;
  }
`;