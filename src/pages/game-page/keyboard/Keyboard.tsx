// @ts-ignore
import keyboard_container from '../../../assets/containers/keyboard.svg';
import React, { useState } from 'react';
import { EmojiListKeys } from '../../../store/simple-emoji/emoji.model';
import styled from 'styled-components';
import { emojiCategories } from '../../../data/emojiCodes';
import { TStateSetter } from '../../../types';
import { Keys } from './Keys';
import Switches from './switcher/Switcher';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { IEmojiState } from '../../../store/simple-emoji/emoji.sllice';
import { setSelectedEmoji } from '../../../store/emoji-mapper/emojiMapper.slice';

const Wrapper = styled.div`
  height: 100%;
  background: no-repeat center/contain url(${keyboard_container});
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function Keyboard(): JSX.Element {
	const dispatch = useAppDispatch();
	const { emojiList }: IEmojiState = useAppSelector(state => state.simpleEmojiReducer);
	const [panel, setPanel]: [EmojiListKeys, TStateSetter<EmojiListKeys>] = useState<EmojiListKeys>('yellowList');

	return (
		<Wrapper>
			<Switches setPanel={setPanel}/>
			<Keys>
				{emojiCategories[panel].map((code: string) =>
					<img
						onClick={() => dispatch(setSelectedEmoji(code))}
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