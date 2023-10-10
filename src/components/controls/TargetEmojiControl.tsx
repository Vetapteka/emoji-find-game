import React, { JSX } from 'react';
import { TARGET_EMOJI_CONTAINER_SIZE } from '../../constants';
import { googleRequestUrl } from '../../store/emoji-mapper/emojiUtils';
import PenBorder from '../borders/PenBorder';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import styled from 'styled-components';
import UpdateEmojiControl from './UpdateEmojiControl';

const Wrapper = styled.div`
  position: relative;

  & > .update {
    position: absolute;
	top: -0.7vh;
	right: -1.5vh;
  }
`;

function TargetEmojiControl(): JSX.Element {
	const { targetEmoji }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<Wrapper>
			<UpdateEmojiControl className="update"/>
			<PenBorder size={TARGET_EMOJI_CONTAINER_SIZE}>
				{targetEmoji &&
					<img
						loading="eager"
						alt="target_emoji"
						src={googleRequestUrl(targetEmoji)}
					/>}
			</PenBorder>
		</Wrapper>
	);
}

export default TargetEmojiControl;