import React, { JSX } from 'react';
import { googleRequestUrl, ITargetEmoji } from '../../store/emoji-mapper/emojiUtils';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';

interface TargetEmojiSimpleControlProps {
	className?: string;
}

function TargetEmojiSimpleControl({ ...props }: TargetEmojiSimpleControlProps): JSX.Element {
	const { targetEmoji }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<>{targetEmoji && <img
			{...props}
			loading="eager"
			alt="target_emoji"
			src={googleRequestUrl(targetEmoji.res)}/>
		}</>
	);
}

export default TargetEmojiSimpleControl;