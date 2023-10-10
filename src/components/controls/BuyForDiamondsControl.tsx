import React, { JSX } from 'react';
import { IconSizeEnum } from '../icons/Icon';
import DiamondControl from './DiamondControl';

interface BuyForDiamondsControlProps {
	price: number;
	className?: string;
}

function BuyForDiamondsControl({ price, ...props }: BuyForDiamondsControlProps): JSX.Element {
	return (
		<DiamondControl {...props} size={IconSizeEnum.S} count={price}/>
	);
}

export default BuyForDiamondsControl;