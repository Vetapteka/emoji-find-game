import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { NavigationContainer } from '../style/NavigationContainer';
import PenBorder from '../borders/PenBorder';
import styled from 'styled-components';
import { ITheme, IThemeState } from '../../store/theme/theme.model';
import { AppDispatch, RootState } from '../../store/store';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTheme } from '../../store/theme/theme.slice';
import BuyForDiamondsControl from './BuyForDiamondsControl';
import { ITodo, ToDoEnum } from '../../hooks/useBuySmth';
import RewardVideoControl from './RewardVideoControl';


const ThemeContainer = styled(NavigationContainer)`
  padding-right: 4vh;
  padding-left: 2vh;
  box-sizing: border-box;
`;

interface ThemeControlProps {
	theme: ITheme;
}

function ThemeControl({ theme }: ThemeControlProps): JSX.Element {
	const { currentTheme }: IThemeState = useAppSelector((state: RootState) => state.themeReducer);
	const dispatch: AppDispatch = useAppDispatch();

	const getPriceElement = (): JSX.Element => {
		const toDo: ITodo = { action: ToDoEnum.BUY_THEME, payload: theme.index };
		switch (theme.price) {
			case null:
				return <Icon icon="CHECK_MARK_ICON" size={IconSizeEnum.S}/>;
			case 'reward':
				return <RewardVideoControl toDo={toDo}/>;
			default :
				return <BuyForDiamondsControl price={theme.price} toDo={toDo}/>;
		}
	};

	return (
		<PenBorder width="100%" height={IconSizeEnum.L} isActive={theme.index === currentTheme.index}
				   onClick={() => dispatch(setTheme(theme.index))}>
			<ThemeContainer>
				<Icon icon="THEME_ICON" size={IconSizeEnum.L} style={{ stroke: theme.stroke }}/>
				{getPriceElement()}
			</ThemeContainer>
		</PenBorder>
	);
}

export default ThemeControl;