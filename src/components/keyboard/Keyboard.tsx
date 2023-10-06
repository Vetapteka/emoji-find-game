import React, { JSX, useState } from 'react';
import styled from 'styled-components';
import KeyboardBorder from '../borders/KeyboardBorder';
import EmojiKeyboardSwitcher from './EmojiKeyboardSwitcher';
import Icon, { IconSizeEnum, TIcon } from '../icons/Icon';
import { KEYBOARD_HEIGHT } from '../../constants';
import { TEmojiListKeys } from '../../store/emoji/emoji.model';
import { emojiCodes } from '../../data/emojiCodes';
import { setSelectedEmoji } from '../../store/emoji-mapper/emojiMapper.slice';
import { TStateSetter } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AppDispatch, RootState } from '../../store/store';
import { IEmojiState } from '../../store/emoji/emoji.sllice';

const Keys = styled.div`
  & > * {
    width: calc(0.17 * ${KEYBOARD_HEIGHT});
    height: calc(0.17 * ${KEYBOARD_HEIGHT});
    padding: 0.3%;
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
	const [emojiListName, setEmojiListName]: [TEmojiListKeys, TStateSetter<TEmojiListKeys>] = useState<TEmojiListKeys>('yellowList');
	const { emojiList }: IEmojiState = useAppSelector((state: RootState) => state.emojiReducer);
	const dispatch: AppDispatch = useAppDispatch();
	return (
		<KeyboardBorder height={KEYBOARD_HEIGHT}>
			<>
				<div className="switchers">
					{Object.keys(emojiCodes).map((listName: string) =>
						<EmojiKeyboardSwitcher
							isActive={emojiListName === listName}
							onClick={() => setEmojiListName(listName as TEmojiListKeys)}>
							<Icon icon={EmojiListToIcon[listName as TEmojiListKeys]} size={IconSizeEnum.XS}/>
						</EmojiKeyboardSwitcher>)
					}
				</div>
				<Keys className="keys">
					{emojiCodes[emojiListName].map((code: string) =>
						<img
							onClick={() => dispatch(setSelectedEmoji(code))}
							loading="eager"
							alt={code}
							src={`data:image/svg+xml;utf8,${encodeURIComponent(emojiList[code])}`}
						/>
					)}
				</Keys>
			</>
		</KeyboardBorder>
	);
}

export default Keyboard;