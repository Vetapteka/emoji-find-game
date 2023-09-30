import React, { JSX } from 'react';
import { TARGET_EMOJI_CONTAINER_SIZE } from '../../constants';
import { googleRequestUrl } from '../../store/emoji/emojiUtils';
import PenBorder from '../borders/PenBorder';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';

function TargetEmojiControl(): JSX.Element {
	const { targetEmoji }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<PenBorder size={TARGET_EMOJI_CONTAINER_SIZE}>
			<img
				loading="eager"
				alt="target_emoji"
				src={googleRequestUrl(targetEmoji)}
			/>
		</PenBorder>
	);
}

export default TargetEmojiControl;