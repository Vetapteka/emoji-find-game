import React, { JSX } from 'react';
import styled from 'styled-components';
import { MERGE_EMOJI_SIZE } from '../../constants';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';


const Wrapper = styled.div`
  height: ${MERGE_EMOJI_SIZE};
  width: ${MERGE_EMOJI_SIZE};

  & > img {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

function MergeEmojiControl(): JSX.Element {
	const {
		rightEmoji,
		leftEmoji,
		mergedEmojiPath
	}: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<Wrapper>
			{mergedEmojiPath ?
				<img
					loading="eager"
					alt={[leftEmoji, rightEmoji].join('-')}
					src={mergedEmojiPath}
				/> : <Icon icon="QUESTION_ICON" size={IconSizeEnum.M}/>
			}
		</Wrapper>
	);
}

export default MergeEmojiControl;