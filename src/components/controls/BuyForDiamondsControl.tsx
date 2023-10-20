import React, { JSX } from 'react';
import { IconSizeEnum } from '../icons/Icon';
import DiamondControl from './DiamondControl';
import PriceContainer from '../style/PriceContainer';
import useBuySmth, { ITodo } from '../../hooks/useBuySmth';

interface BuyForDiamondsControlProps {
	price: number;
	toDo: ITodo;
	withBorder?: boolean;
}

function BuyForDiamondsControl({ price, toDo, withBorder }: BuyForDiamondsControlProps): JSX.Element {
	const { buySmth } = useBuySmth();

	return (
		<>
			{withBorder
				? <PriceContainer onClick={() => buySmth(price, toDo)}>
					<DiamondControl size={IconSizeEnum.S} count={price}/>
				</PriceContainer>
				: <DiamondControl className="a-hover-up"
								  onClick={() => buySmth(price, toDo)}
								  size={IconSizeEnum.S}
								  count={price}/>
			}
		</>
	);
}

export default BuyForDiamondsControl;