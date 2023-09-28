import React from 'react';
import { SELECTED_EMOJI_CONTAINER_SIZE } from '../size_constants';
// @ts-ignore
import selected_emoji_container from '../../../assets/containers/selected_emoji.svg';
import { IEmojiState } from '../../../store/simple-emoji/emoji.sllice';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { SelectedEmojiContainersEnum } from '../../../store/emoji-mapper/emojiMapper.model';
import { activateEmojiContainer } from '../../../store/emoji-mapper/emojiMapper.slice';
import PenBorder from '../../../components/PenBorder';

export interface SelectedEmojiContainerProps {
	type: SelectedEmojiContainersEnum;
	selectedEmoji: string;
}

function SelectedEmojiContainer({ type, selectedEmoji }: SelectedEmojiContainerProps) {
	const { emojiList }: IEmojiState = useAppSelector(state => state.simpleEmojiReducer);
	const { activeEmojiContainer } = useAppSelector(state => state.emojiMapperReducer);
	const dispatch = useAppDispatch();

	const clickHandler = (): void => {
		dispatch(activateEmojiContainer(type));
	};

	return (
		<PenBorder size={SELECTED_EMOJI_CONTAINER_SIZE} onClick={clickHandler} isActive={type === activeEmojiContainer}>
			{selectedEmoji ? <img
				loading="lazy"
				alt={selectedEmoji}
				src={`data:image/svg+xml;utf8,${encodeURIComponent(emojiList[selectedEmoji])}`}
			/> : null}
		</PenBorder>);
}

export default SelectedEmojiContainer;