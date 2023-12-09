import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/pages/pages.slice';
import { stopTimer } from '../../store/timer/timer.slice';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';

function PauseControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const { playSound }: SoundManager = useSoundManager();

	const openPauseModalHandler = (): void => {
		playSound('ui_click_sound');
		dispatch(stopTimer());
		dispatch(openModal({ type: 'PAUSE_MODAL' }));
	};
	return (
		<Icon className="a-hover-up" icon="PAUSE_ICON" size={IconSizeEnum.S} onClick={openPauseModalHandler}/>
	);
}

export default PauseControl;