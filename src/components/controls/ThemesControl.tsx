import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { openPage } from '../../store/pages/pages.slice';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';

interface ThemesControlProps {
	size?: IconSizeEnum;
}

function ThemesControl({ size }: ThemesControlProps): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();

	const openThemesPageHandler = () => dispatch(openPage('THEMES_PAGE'));
	return (
		<Icon className="a-hover-up" icon="THEME_ICON" size={size || IconSizeEnum.M} onClick={openThemesPageHandler}/>
	);
}

export default ThemesControl;