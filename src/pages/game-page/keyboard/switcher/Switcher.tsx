import styled from 'styled-components';
import SmileIcon from './icons/SmileIcon';
import { EmojiListKeys } from '../../../../store/simple-emoji/simpleEmoji.model';
import HeartIcon from './icons/HeartIcon';
import BantIcon from './icons/BantIcon';
import AvocadoIcon from './icons/AvocadoIcon';
import BagIcon from './icons/BagIcon';
import BallIcon from './icons/BallIcon';
import React, { useState } from 'react';
import { IIconColors, IconColorsContext, initIconColorsState } from './IconColorsContext';
import { TStateSetter } from '../../../../types';
import { ICON_ACTIVE_COLOR, ICON_DEFAULT_COLOR } from './iconUtils';
import { KEYBOARD_SIZE } from '../../size_constants';

const Wrapper = styled.div`
  height: calc(${KEYBOARD_SIZE} / 8);
  display: flex;
`;

interface SwitchesProps {
	setPanel: (list: EmojiListKeys) => void;
}

function Switches({ setPanel }: SwitchesProps) {
	const [iconColors, setIconColor]: [IIconColors, TStateSetter<IIconColors>] = useState<IIconColors>(initIconColorsState);

	const changeColorsHandler = (list: EmojiListKeys): void => {
		setPanel(list);
		const state: IIconColors = {
			AVOCADO_ICON: list === 'eatList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
			BALL_ICON: list === 'sportList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
			BANT_ICON: list === 'thingsList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
			BAG_ICON: list === 'greenList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
			HEART_ICON: list === 'symbolsList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
			SMILE_ICON: list === 'yellowList' ? ICON_ACTIVE_COLOR : ICON_DEFAULT_COLOR,
		};
		setIconColor(state);
	};

	return (
		<Wrapper>
			<IconColorsContext.Provider value={[iconColors, setIconColor]}>
				<SmileIcon
					color={iconColors.SMILE_ICON}
					onClick={() => changeColorsHandler('yellowList' as EmojiListKeys)}/>
				<HeartIcon
					color={iconColors.HEART_ICON}
					onClick={() => changeColorsHandler('symbolsList' as EmojiListKeys)}/>
				<BantIcon
					color={iconColors.BANT_ICON}
					onClick={() => changeColorsHandler('thingsList' as EmojiListKeys)}/>
				<AvocadoIcon
					color={iconColors.AVOCADO_ICON}
					onClick={() => changeColorsHandler('eatList' as EmojiListKeys)}/>
				<BagIcon
					color={iconColors.BAG_ICON} onClick={() => changeColorsHandler('greenList' as EmojiListKeys)}/>
				<BallIcon
					color={iconColors.BALL_ICON}
					onClick={() => changeColorsHandler('sportList' as EmojiListKeys)}/>
			</IconColorsContext.Provider>
		</Wrapper>

	);

}

export default Switches;