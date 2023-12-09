import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/pages/pages.slice';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';

function SettingsControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const { playSound }: SoundManager = useSoundManager();

	const openSettingsModalHandler = (): void => {
		playSound('ui_click_sound');
		dispatch(openModal({ type: 'SETTINGS_MODAL' }));
	};

	return (
		<Icon className="a-hover-up" icon="SETTINGS_ICON" size={IconSizeEnum.S} onClick={openSettingsModalHandler}/>
	);
}

export default SettingsControl;