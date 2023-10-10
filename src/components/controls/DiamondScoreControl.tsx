import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IconSizeEnum } from '../icons/Icon';
import { RootState } from '../../store/store';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';
import DiamondControl from './DiamondControl';

interface DiamondScoreProps {
	size: IconSizeEnum;
}

function DiamondScoreControl({ size }: DiamondScoreProps) {
	const { diamondsCount }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	return (
		<DiamondControl size={size} count={diamondsCount}/>
	);
}

export default DiamondScoreControl;