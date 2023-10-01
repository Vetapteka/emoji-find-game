import React, { JSX } from 'react';
import { PageContainer, PageContent } from '../components/style/PageContainer';
import styled from 'styled-components';
import Icon, { IconSizeEnum } from '../components/icons/Icon';
import DiamondControl from '../components/controls/DiamondControl';
import { useAppDispatch } from '../hooks/redux';
import { AppDispatch } from '../store/store';
import { openPage } from '../store/pages/pages.slice';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BestScoreControl from '../components/controls/BestScoreControl';

const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
`;

const Content = styled(PageContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function StartPage(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openGamePageHandler = () => dispatch(openPage('GAME_PAGE'));
	const openThemesPageHandler = () => dispatch(openPage('THEMES_PAGE'));

	return (
		<Wrapper>
			<NavigationContainer>
				<DiamondControl size={IconSizeEnum.S}/>
				<Icon icon={'SETTINGS_ICON'} size={IconSizeEnum.S}/>
			</NavigationContainer>
			<Content>
				<BestScoreControl/>
				<Icon icon={'PLAY_ICON'} size={IconSizeEnum.XL} onClick={openGamePageHandler}/>
			</Content>
			<NavigationContainer>
				<Icon icon={'MORE_GAMES_ICON'} size={IconSizeEnum.L}/>
				<Icon icon={'LEADERBOARD_ICON'} size={IconSizeEnum.L}/>
				<Icon icon={'THEME_ICON'} size={IconSizeEnum.L} onClick={openThemesPageHandler}/>
				<Icon icon={'LIKE_ICON'} size={IconSizeEnum.L}/>
			</NavigationContainer>
		</Wrapper>
	);
}

export default StartPage;