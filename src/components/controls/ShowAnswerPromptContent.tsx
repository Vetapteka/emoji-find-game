import React, { JSX } from 'react';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import Icon, { IconSizeEnum } from '../icons/Icon';
import styled from 'styled-components';
import TargetEmojiSimpleControl from './TargerEmojiSimpleControl';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & .emoji {
    width: 6vh;
    height: 6vh;
  }
`;

function ShowAnswerPromptContent(): JSX.Element {
	const { answer2, answer1 }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	return (
		<Wrapper>
			<PromptEmoji code={answer1}/>
			<Icon icon="PLUS_ICON" size={IconSizeEnum.S}/>
			<PromptEmoji code={answer2}/>
			<Icon icon="EQUAL_ICON" size={IconSizeEnum.XS}/>
			<TargetEmojiSimpleControl className='emoji'/>
		</Wrapper>
	);
}

function PromptEmoji({ code }: { code: string }): JSX.Element {
	return (
		<>
			{code
				? <div className={`u-${code} emoji`}></div>
				: <Icon icon="QUESTION_ICON" size={IconSizeEnum.S}/>
			}
		</>
	);
}

export default ShowAnswerPromptContent;