import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';
import { startTimer } from '../../store/timer/timer.slice';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';


interface ContinueGameControlProps {
	size?: IconSizeEnum;
	isBackIcon?: boolean;
}

function ContinueGameControl({ isBackIcon, size }: ContinueGameControlProps): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const { playSound }: SoundManager = useSoundManager();
	const openGamePageHandler = (): void => {
		playSound('ui_click_sound');
		dispatch(startTimer());
		dispatch(openPage('GAME_PAGE'));
	};
	return (
		<Icon className={isBackIcon ? 'a-hover-up' : 'a-pulse'} icon={isBackIcon ? 'BACK_ICON' : 'PLAY_ICON'}
			  size={size ?? IconSizeEnum.L}
			  onClick={openGamePageHandler}/>
	);
}

export default ContinueGameControl;