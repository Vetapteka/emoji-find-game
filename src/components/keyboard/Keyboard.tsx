import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import KeyboardBorder from '../borders/KeyboardBorder';
import EmojiKeyboardSwitcher from './EmojiKeyboardSwitcher';
import Icon, { IconSizeEnum, TIcon } from '../icons/Icon';
import { KEY_EMOJI_SIZE, KEYBOARD_HEIGHT } from '../../constants';
import { TEmojiListKeys } from '../../store/emoji-mapper/emojiMapper.model';
import { emojiCodes } from '../../data/emojiCodes';
import { setSelectedEmoji } from '../../store/emoji-mapper/emojiMapper.slice';
import { TStateSetter } from '../../types';
import { useAppDispatch } from '../../hooks/redux';
import { AppDispatch } from '../../store/store';
import { nanoid } from 'nanoid';
import useSoundManager from '../../hooks/soundManager/useSoundManager';

const Keys = styled.div`
  & > * {
    width: ${KEY_EMOJI_SIZE};
    height: ${KEY_EMOJI_SIZE};
    margin: 0.3%;
	display: inline-block;
  }
`;

type TEmojiListToIcon = {
	[key in TEmojiListKeys]: TIcon;
};

const EmojiListToIcon: TEmojiListToIcon = {
	yellowList: 'SMILE_ICON',
	symbolsList: 'HEART_ICON',
	eatList: 'CAKE_ICON',
	greenList: 'GREEN_ICON',
	thingsList: 'BALL_ICON',
};

function Keyboard(): JSX.Element {
	const { playSound } = useSoundManager();
	const [emojiListName, setEmojiListName]: [TEmojiListKeys, TStateSetter<TEmojiListKeys>] = useState<TEmojiListKeys>('yellowList');
	const dispatch: AppDispatch = useAppDispatch();

	const onKeyClick = (code: string) => {
		return (): void => {
			playSound('smile_choose_sound');
			dispatch(setSelectedEmoji(code));
		};
	};

	return (
		<KeyboardBorder height={KEYBOARD_HEIGHT}>
			<>
				<div className="switchers">
					{Object.keys(emojiCodes).map((listName: string) =>
						<EmojiKeyboardSwitcher key={nanoid()}
											   isActive={emojiListName === listName}
											   onClick={() => setEmojiListName(listName as TEmojiListKeys)}>
							<Icon className="a-hover-up" icon={EmojiListToIcon[listName as TEmojiListKeys]}
								  size={IconSizeEnum.S}/>
						</EmojiKeyboardSwitcher>)
					}
				</div>
				<Keys className="keys">
					{emojiCodes[emojiListName].map((code: string) =>
						<div className={`u-${code}`} key={nanoid()} onClick={onKeyClick(code)}></div>
					)}
				</Keys>
			</>
		</KeyboardBorder>
	);
}

export default Keyboard;