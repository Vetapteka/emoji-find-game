import React, { JSX } from 'react';
import { googleRequestUrl } from '../../store/emoji-mapper/emojiUtils';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import Icon, { IconSizeEnum } from '../icons/Icon';

interface TargetEmojiSimpleControlProps {
	className?: string;
}

export default function TargetEmojiSimpleControl({ ...props }: TargetEmojiSimpleControlProps): JSX.Element {
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

export function TargetPreviousEmojiSimpleControl({ ...props }: TargetEmojiSimpleControlProps): JSX.Element {
	const { previousTargetEmoji }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<>{previousTargetEmoji
			? <img
				{...props}
				loading="eager"
				alt="target_emoji"
				src={googleRequestUrl(previousTargetEmoji.res)}/>
			: <Icon icon="QUESTION_ICON" size={IconSizeEnum.S}/>
		}</>
	);
}

export function TargetEmojiPromptControl({ ...props }: TargetEmojiSimpleControlProps): JSX.Element {
	const {
		targetEmoji,
		previousTargetEmoji
	}: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<>{targetEmoji?.res === previousTargetEmoji?.res
			? <Icon icon="QUESTION_ICON" size={IconSizeEnum.S}/>
			: targetEmoji && <img
				{...props}
				loading="eager"
				alt="target_emoji"
				src={googleRequestUrl(targetEmoji.res)}/>
		}</>
	);
}