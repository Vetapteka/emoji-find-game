import React, { useState } from 'react';
import { EmojiListKeys, TEmojiList } from '../../../store/simple-emoji/simpleEmoji.model';
import styled from 'styled-components';
import { emojiCategories } from '../../../data/emoji';
import { TStateSetter } from '../../../types';
// @ts-ignore
import keyboard_container from '../../../assets/containers/keyboard.svg';
import { Switcher, IconPaths, Switches } from './Switcher';
import { Keys } from './Keys';

const Wrapper = styled.div`
  height: 40vh;
  background: no-repeat center/contain url(${keyboard_container});
  display: flex;
  flex-direction: column;
`;

export interface IKeyboardProps {
	emojiList: TEmojiList;
}

function Keyboard({ emojiList }: IKeyboardProps) {
	const [panel, setPanel]: [EmojiListKeys, TStateSetter<EmojiListKeys>] = useState<EmojiListKeys>('yellowList');
	return (
		<Wrapper>
			<Switches>
				{Object.keys(emojiCategories).map((list: string) =>
					<Switcher icon_path={IconPaths[list as EmojiListKeys]}
							  onClick={() => setPanel(list as EmojiListKeys)}/>
				)}
			</Switches>
			<Keys>
				{emojiCategories[panel].map((code: string) =>
					<img
						loading="lazy"
						alt={code}
						src={`data:image/svg+xml;utf8,${encodeURIComponent(emojiList[code])}`}
					/>
				)}
			</Keys>;
		</Wrapper>
	)
		;
}

export default Keyboard;