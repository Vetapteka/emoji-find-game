import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';
import { startTimer } from '../../store/timer/timer.slice';


interface ContinueGameControlProps {
	size?: IconSizeEnum;
	isBackIcon?: boolean;
}

function ContinueGameControl({ isBackIcon, size }: ContinueGameControlProps): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openGamePageHandler = (): void => {
		dispatch(startTimer());
		dispatch(openPage('GAME_PAGE'));
	};
	return (
		<Icon icon={isBackIcon ? 'BACK_ICON' : 'PLAY_ICON'} size={size ?? IconSizeEnum.L}
			  onClick={openGamePageHandler}/>
	);
}

export default ContinueGameControl;