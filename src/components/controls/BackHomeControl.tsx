import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPage } from '../../store/pages/pages.slice';


function BackHomeControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openStartPageHandler = () => dispatch(openPage('START_PAGE'));
	return (

		<Icon icon={'HOME_ICON'} size={IconSizeEnum.S} onClick={openStartPageHandler}/>

	);
}

export default BackHomeControl;