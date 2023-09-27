import styled from 'styled-components';
import { SELECTED_EMOJI_CONTAINER_SIZE } from '../size_constants';
// @ts-ignore
import plus_img from '../../../assets/plus.svg';

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PLUS_ICON_SIZE = `calc(0.9 * ${SELECTED_EMOJI_CONTAINER_SIZE})`;

export const PlusIcon = styled.div`
  height: ${PLUS_ICON_SIZE};
  width: ${PLUS_ICON_SIZE};
  background: no-repeat center/contain url(${plus_img});
`;

const MERGE_EMOJI_SIZE = `calc(0.9 * ${SELECTED_EMOJI_CONTAINER_SIZE})`
export const MergeEmojiContainer = styled.div`
  
  & > img {
    height: ${MERGE_EMOJI_SIZE};
    width: ${MERGE_EMOJI_SIZE};
    opacity: 0.7;
  }
`