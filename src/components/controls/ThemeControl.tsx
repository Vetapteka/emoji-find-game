import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { NavigationContainer } from '../style/NavigationContainer';
import PenBorder from '../borders/PenBorder';
import styled from 'styled-components';
import { ITheme } from '../../store/theme/theme.model';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { setTheme } from '../../store/theme/theme.slice';


const ThemeContainer = styled(NavigationContainer)`
  padding-top: 2vh;
  padding-right: 4vh;
  padding-bottom: 2vh;
  box-sizing: border-box;
`;

interface ThemeControlProps {
	theme: ITheme;
}

function ThemeControl({ theme }: ThemeControlProps): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	return (
		<PenBorder width="100%" height={IconSizeEnum.L} isActive={theme.isSelected}
				   onClick={() => dispatch(setTheme(theme.index))}>
			<ThemeContainer>
				<Icon icon="THEME_ICON" size={IconSizeEnum.L} style={{ stroke: theme.stroke }}/>
				<Icon icon="CHECK_MARK_ICON" size={IconSizeEnum.S}/>
			</ThemeContainer>
		</PenBorder>
	);
}

export default ThemeControl;