import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openPreviousPage } from '../../store/pages/pages.slice';

function BackControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openPreviousPageHandler = () => dispatch(openPreviousPage());
	return (
		<Icon className="a-hover-up" icon="BACK_ICON" size={IconSizeEnum.S} onClick={openPreviousPageHandler}/>
	);
}

export default BackControl;