import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppDispatch, RootState } from '../../store/store';
import { activateEmojiContainer, IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import PenBorder from '../borders/PenBorder';
import { KEY_EMOJI_SIZE, SELECTED_EMOJI_CONTAINER_SIZE } from '../../constants';
import { SelectedEmojiContainersEnum } from '../../store/emoji-mapper/emojiMapper.model';
import styled from 'styled-components';

interface WrapperProps {
	isLeft: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;

  & > .prompt {
    position: absolute;
    width: ${KEY_EMOJI_SIZE};
    height: ${KEY_EMOJI_SIZE};
    top: -3vh;

    ${({ isLeft }) => isLeft ? 'right: -3vh;' : 'left: -3vh;'}

    z-index: 50;
    opacity: 0.8;
  }
`;

export interface SelectedEmojiContainerProps {
	type: SelectedEmojiContainersEnum;
	prompt: string;
	selectedEmoji: string;
}

function SelectedEmojiControl({ type, prompt, selectedEmoji }: SelectedEmojiContainerProps) {
	const { activeEmojiContainer }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	const dispatch: AppDispatch = useAppDispatch();

	const clickHandler = (): void => {
		dispatch(activateEmojiContainer(type));
	};

	return (
		<Wrapper isLeft={type === SelectedEmojiContainersEnum.LEFT}>
			<div className={`u-${prompt} prompt`}></div>
			<PenBorder size={SELECTED_EMOJI_CONTAINER_SIZE} onClick={clickHandler}
					   isActive={type === activeEmojiContainer}>
				{selectedEmoji ? <div className={`u-${selectedEmoji} image`}></div> : null}
			</PenBorder>
		</Wrapper>);
}

export default SelectedEmojiControl;