import React, { JSX, useEffect } from 'react';
import styled from 'styled-components';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { TargetEmojiPromptControl, TargetPreviousEmojiSimpleControl } from './TargerEmojiSimpleControl';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { updatePreviousTargetEmoji } from '../../store/emoji-mapper/emojiMapper.slice';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .emoji {
    width: 9vh;
  }

  & > * {
    margin: 0 1vh;
  }
`;

function UpdateEmojiPromptContent(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();

	useEffect(() => (): void => {
		dispatch(updatePreviousTargetEmoji());
	});

	return (
		<Wrapper>
			<TargetPreviousEmojiSimpleControl className="emoji"/>
			<Icon icon="ARROW_ICON" size={IconSizeEnum.S}/>
			<TargetEmojiPromptControl className="emoji"/>
		</Wrapper>
	);
}

export default UpdateEmojiPromptContent;