import React from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import PriceContainer from '../style/PriceContainer';
import useBuySmth, { ITodo } from '../../hooks/useBuySmth';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';


interface RewardVideoControlProps {
	toDo: ITodo;
	withBorder?: boolean;
	className?: string;
}

function RewardVideoControl({ withBorder, toDo }: RewardVideoControlProps): JSX.Element {
	const { toDoSmth } = useBuySmth();
	const { playSound }: SoundManager = useSoundManager();
	const watchVideoHandler = (): void => {
		playSound('ui_click_sound');
		toDoSmth(toDo);
	};

	return (
		<>
			{
				withBorder
					? <PriceContainer onClick={watchVideoHandler}>
						<Icon icon="REWARD_ICON" size={IconSizeEnum.M}/>
					</PriceContainer>
					: <Icon className="a-hover-up" onClick={watchVideoHandler} icon="REWARD_ICON" size={IconSizeEnum.M}/>
			}
		</>

	);
}

export default RewardVideoControl;