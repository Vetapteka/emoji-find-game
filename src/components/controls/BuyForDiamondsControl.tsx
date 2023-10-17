import React, { JSX } from 'react';
import { IconSizeEnum } from '../icons/Icon';
import DiamondControl from './DiamondControl';
import PriceContainer from '../style/PriceContainer';
import useBuySmth, { ToDoEnum } from '../../hooks/useBuySmth';

interface BuyForDiamondsControlProps {
	price: number;
	toDo: ToDoEnum;
}

function BuyForDiamondsControl({ price, toDo}: BuyForDiamondsControlProps): JSX.Element {
	const { buySmth } = useBuySmth();

	return (
		<PriceContainer onClick={() => buySmth(price, toDo)}><DiamondControl
			size={IconSizeEnum.S} count={price}/></PriceContainer>
	);
}

export default BuyForDiamondsControl;