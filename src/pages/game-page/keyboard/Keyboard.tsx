import React, { useState } from 'react';
import { EmojiListKeys } from '../../../store/simple-emoji/simpleEmoji.model';
import styled from 'styled-components';
import { emojiCategories } from '../../../data/emoji';
import { TStateSetter } from '../../../types';
// @ts-ignore
import keyboard_container from '../../../assets/containers/keyboard.svg';
import { Keys } from './Keys';
import Switches from './switcher/Switcher';
import { useAppSelector } from '../../../hooks/redux';
import { ISimpleEmojiState } from '../../../store/simple-emoji/simpleEmoji.sllice';

const Wrapper = styled.div`
  height: 100%;
  background: no-repeat center/contain url(${keyboard_container});
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function Keyboard(): JSX.Element {
	const { emojiList }: ISimpleEmojiState = useAppSelector(state => state.simpleEmojiReducer);
	const [panel, setPanel]: [EmojiListKeys, TStateSetter<EmojiListKeys>] = useState<EmojiListKeys>('yellowList');
	return (
		<Wrapper>
			<Switches setPanel={setPanel}/>
			<Keys>
				{emojiCategories[panel].map((code: string) =>
					<img
						loading="lazy"
						alt={code}
						src={`data:image/svg+xml;utf8,${encodeURIComponent(emojiList[code])}`}
					/>
				)}
			</Keys>
		</Wrapper>
	);
}

export default Keyboard;