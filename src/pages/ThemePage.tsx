import React, { JSX } from 'react';
import { PageContainer } from '../components/style/PageContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BackControl from '../components/controls/BackControl';
import DiamondControl from '../components/controls/DiamondControl';
import { IconSizeEnum } from '../components/icons/Icon';
import { useAppSelector } from '../hooks/redux';
import { RootState } from '../store/store';
import { ITheme } from '../store/theme/theme.model';
import ThemeControl from '../components/controls/ThemeControl';
import styled from 'styled-components';

const ThemesContainer = styled.div`
  height: 85vh;
  overflow: scroll;

  & > div {
    margin-bottom: 1.5vh;
  }
`;

function ThemePage(): JSX.Element {
	const availableThemes: ITheme[] = useAppSelector((state: RootState) => state.themeReducer.availableThemes);

	return (
		<PageContainer>
			<NavigationContainer>
				<BackControl/>
				<DiamondControl size={IconSizeEnum.S}/>
			</NavigationContainer>
			<ThemesContainer>
				{availableThemes.map((theme: ITheme, index: number): JSX.Element => <ThemeControl key={index} theme={theme}/>)}
			</ThemesContainer>
		</PageContainer>
	);
}

export default ThemePage;