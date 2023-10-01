import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import DigitProvider from '../digits/DigitProvider';
import { useAppSelector } from '../../hooks/redux';

function BestScoreControl(): JSX.Element {
	const bestScore: number = useAppSelector(state => state.userReducer.bestScore);

	return (
		<>
			<Icon icon={'CROWN_ICON'} size={IconSizeEnum.L}/>
			<DigitProvider n={bestScore} isBold={false} size={IconSizeEnum.XL}/>
		</>
	);
}

export default BestScoreControl;