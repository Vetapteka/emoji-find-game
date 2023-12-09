import React, { JSX } from 'react';
import { PageContainer, PageContent } from '../components/style/PageContainer';
import styled from 'styled-components';
import Icon, { IconSizeEnum } from '../components/icons/Icon';
import DiamondScoreControl from '../components/controls/DiamondScoreControl';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BestScoreControl from '../components/controls/BestScoreControl';
import ThemesControl from '../components/controls/ThemesControl';
import useStartGame from '../hooks/useStartGame';
import SettingsControl from '../components/controls/SettingsControl';
import useSoundManager, { SoundManager } from '../hooks/soundManager/useSoundManager';

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
	const startGame = useStartGame();
	const { playSound }: SoundManager = useSoundManager();


	const startGameHandler = (): void => {
		playSound('background_music');
		startGame();
	}

	return (
		<Wrapper className="a-appear">
			<NavigationContainer>
				<DiamondScoreControl size={IconSizeEnum.S}/>
				<SettingsControl/>
			</NavigationContainer>
			<Content>
				<BestScoreControl/>
				<Icon className="a-pulse" icon={'PLAY_ICON'} size={IconSizeEnum.XL} onClick={startGameHandler}/>
			</Content>
			<NavigationContainer>
				<Icon className="a-hover-up" icon={'MORE_GAMES_ICON'} size={IconSizeEnum.L}/>
				<Icon className="a-hover-up" icon={'LEADERBOARD_ICON'} size={IconSizeEnum.L}/>
				<ThemesControl size={IconSizeEnum.L}/>
				<Icon className="a-hover-up" icon={'LIKE_ICON'} size={IconSizeEnum.L}/>
			</NavigationContainer>
		</Wrapper>
	);
}

export default StartPage;