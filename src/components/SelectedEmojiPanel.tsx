import React, { JSX } from 'react';
import { SelectedEmojiContainersEnum } from '../store/emoji-mapper/emojiMapper.model';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { IEmojiMapperState } from '../store/emoji-mapper/emojiMapper.slice';
import SelectedEmojiControl from './controls/SelectedEmojiControl';
import styled from 'styled-components';
import Icon, { IconSizeEnum } from './icons/Icon';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function SelectedEmojiPanel(): JSX.Element {
	const { rightEmoji, leftEmoji }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	return (
		<Wrapper>
			<SelectedEmojiControl type={SelectedEmojiContainersEnum.LEFT}
								  selectedEmoji={leftEmoji}></SelectedEmojiControl>
			<Icon icon="PLUS_ICON" size={IconSizeEnum.M}/>
			<SelectedEmojiControl type={SelectedEmojiContainersEnum.RIGHT}
								  selectedEmoji={rightEmoji}></SelectedEmojiControl>
		</Wrapper>
	);
}

export default SelectedEmojiPanel;