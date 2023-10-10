import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';
import { startTimer } from '../../store/timer/timer.slice';

function ContinueGameControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openGamePageHandler = () => {
		dispatch(startTimer());
		dispatch(openPage('GAME_PAGE'));
	};
	return (
		<Icon icon="PLAY_ICON" size={IconSizeEnum.L} onClick={openGamePageHandler}/>
	);
}

export default ContinueGameControl;