import React, { JSX } from 'react';
import { IconSizeEnum } from '../icons/Icon';
import DiamondControl from './DiamondControl';

interface BuyForDiamondsControlProps {
	price: number;
}

function BuyForDiamondsControl({ price }: BuyForDiamondsControlProps): JSX.Element {
	return (
		<DiamondControl size={IconSizeEnum.S} count={price}/>
	);
}

export default BuyForDiamondsControl;