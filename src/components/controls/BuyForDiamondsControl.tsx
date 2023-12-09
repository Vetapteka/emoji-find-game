import React, { JSX } from 'react';
import { IconSizeEnum } from '../icons/Icon';
import DiamondControl from './DiamondControl';
import PriceContainer from '../style/PriceContainer';
import useBuySmth, { ITodo } from '../../hooks/useBuySmth';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';

interface BuyForDiamondsControlProps {
	price: number;
	toDo: ITodo;
	withBorder?: boolean;
}

function BuyForDiamondsControl({ price, toDo, withBorder }: BuyForDiamondsControlProps): JSX.Element {
	const { buySmth } = useBuySmth();
	const { playSound }: SoundManager = useSoundManager();

	const buySmthHandler = (): void => {
		playSound('buy_sound');
		buySmth(price, toDo);
	};

	return (
		<>
			{withBorder
				? <PriceContainer onClick={buySmthHandler}>
					<DiamondControl size={IconSizeEnum.S} count={price}/>
				</PriceContainer>
				: <DiamondControl className="a-hover-up"
								  onClick={buySmthHandler}
								  size={IconSizeEnum.S}
								  count={price}/>
			}
		</>
	);
}

export default BuyForDiamondsControl;