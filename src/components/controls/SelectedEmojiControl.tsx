import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppDispatch, RootState } from '../../store/store';
import { activateEmojiContainer, IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import PenBorder from '../borders/PenBorder';
import { SELECTED_EMOJI_CONTAINER_SIZE } from '../../constants';
import { SelectedEmojiContainersEnum } from '../../store/emoji-mapper/emojiMapper.model';

export interface SelectedEmojiContainerProps {
	type: SelectedEmojiContainersEnum;
	selectedEmoji: string;
}

function SelectedEmojiControl({ type, selectedEmoji }: SelectedEmojiContainerProps) {
	const { activeEmojiContainer }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	const dispatch: AppDispatch = useAppDispatch();

	const clickHandler = (): void => {
		dispatch(activateEmojiContainer(type));
	};

	return (
		<PenBorder size={SELECTED_EMOJI_CONTAINER_SIZE} onClick={clickHandler} isActive={type === activeEmojiContainer}>
			{selectedEmoji ? <div className={`u-${selectedEmoji}`}></div> : null}
		</PenBorder>);
}

export default SelectedEmojiControl;