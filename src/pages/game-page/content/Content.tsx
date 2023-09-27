import React from 'react';
import SelectedEmojiContainer from './selectedEmojiContainer/SelectedEmojiContainer';
import { SelectedEmojiContainersEnum } from '../../../store/emoji-mapper/emojiMapper.model';
import { useAppSelector } from '../../../hooks/redux';
// @ts-ignore
import plus_img from '../../../assets/plus.svg';
import { Footer, MergeEmojiContainer, PlusIcon } from './ContentUtils';
import {
	googleRequestUrl,
} from '../../../store/simple-emoji/emojiUtils';
import SelectedEmojiBorder from './selectedEmojiContainer/SelectedEmojiBorder';
import { TARGET_EMOJI_CONTAINER_SIZE } from '../size_constants';

function Content() {
	const { rightEmoji, leftEmoji, targetEmoji, mergedEmojiPath } = useAppSelector(state => state.emojiMapperReducer);
	return (
		<>
			<SelectedEmojiBorder isActive={false} size={TARGET_EMOJI_CONTAINER_SIZE}>
				<img
					loading="lazy"
					alt={[leftEmoji, rightEmoji].join('-')}
					src={googleRequestUrl(targetEmoji)}
				/>
			</SelectedEmojiBorder>
			<MergeEmojiContainer>
				{mergedEmojiPath ?
					<img
						loading="lazy"
						alt={[leftEmoji, rightEmoji].join('-')}
						src={mergedEmojiPath}
					/> : '?'
				}

			</MergeEmojiContainer>
			<Footer>
				<SelectedEmojiContainer type={SelectedEmojiContainersEnum.LEFT}
										selectedEmoji={leftEmoji}></SelectedEmojiContainer>
				<PlusIcon/>
				<SelectedEmojiContainer type={SelectedEmojiContainersEnum.RIGHT}
										selectedEmoji={rightEmoji}></SelectedEmojiContainer>
			</Footer>
		</>
	);

}

export default Content;