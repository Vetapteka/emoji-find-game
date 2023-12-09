import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';


function BackHomeControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const { playSound }: SoundManager = useSoundManager();
	const openStartPageHandler = (): void => {
		playSound('ui_click_sound')
		dispatch(openPage('START_PAGE'));
	};
	return (
		<Icon className="a-hover-up" icon={'HOME_ICON'} size={IconSizeEnum.S} onClick={openStartPageHandler}/>
	);
}

export default BackHomeControl;