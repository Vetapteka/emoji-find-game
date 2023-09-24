import styled from 'styled-components';
// @ts-ignore
import smile_icon from '../../../assets/containers/keyboard_icons/smile_icon.svg';
// @ts-ignore
import heart_icon from '../../../assets/containers/keyboard_icons/heart_icon.svg';
// @ts-ignore
import eat_icon from '../../../assets/containers/keyboard_icons/eat_icon.svg';
// @ts-ignore
import animal_icon from '../../../assets/containers/keyboard_icons/animal_icon.svg';
// @ts-ignore
import ball_icon from '../../../assets/containers/keyboard_icons/ball_icon.svg';
// @ts-ignore
import bant_icon from '../../../assets/containers/keyboard_icons/bant_icon.svg';
import { EmojiListKeys } from '../../../store/simple-emoji/simpleEmoji.model';

export const Switches = styled.div`
  height: 5vh;
  display: flex;
`;

export interface SwitcherProps {
	icon_path: string;
}

type IIconPaths = {
	[key in EmojiListKeys]: string;
};


export const IconPaths: IIconPaths = {
	yellowList: smile_icon,
	symbolsList: heart_icon,
	eatList: eat_icon,
	greenList: animal_icon,
	sportList: ball_icon,
	thingsList: bant_icon,
};

export const Switcher = styled.button<SwitcherProps>`
  border: none;
  width: calc(100% / ${Object.keys(IconPaths).length});
  background: no-repeat center/2.3em url(${(props) => props.icon_path});
`;