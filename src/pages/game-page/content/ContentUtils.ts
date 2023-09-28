import styled from 'styled-components';
import { SELECTED_EMOJI_CONTAINER_SIZE } from '../size_constants';
// @ts-ignore
import plus_img from '../../../assets/plus.svg';
import { HeaderIconContainer } from '../header/HeaderUtils';
// @ts-ignore
import question_icon from '../../../assets/question.svg';

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

export const QuestionIcon = styled(HeaderIconContainer)`
  height: ${PLUS_ICON_SIZE};
  width: ${PLUS_ICON_SIZE};
  background: no-repeat center/contain url(${question_icon});
`;

const MERGE_EMOJI_SIZE = `calc(0.9 * ${SELECTED_EMOJI_CONTAINER_SIZE})`
export const MergeEmojiContainer = styled.div`
  height: ${MERGE_EMOJI_SIZE};
  width: ${MERGE_EMOJI_SIZE};

  & > img {
	width: 100%;
	height: 100%;
    opacity: 0.7;
  }

`