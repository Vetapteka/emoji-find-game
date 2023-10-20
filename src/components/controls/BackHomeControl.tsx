import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';


function BackHomeControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openStartPageHandler = (): void => {
		dispatch(openPage('START_PAGE'));
	};
	return (
		<Icon className="a-hover-up" icon={'HOME_ICON'} size={IconSizeEnum.S} onClick={openStartPageHandler}/>
	);
}

export default BackHomeControl;