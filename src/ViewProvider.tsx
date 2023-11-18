import React, { JSX } from 'react';
import GameOverModal from './modals/GameOverModal';
import { IPagesState } from './store/pages/pages.model';
import { useAppSelector } from './hooks/redux';
import { RootState } from './store/store';
import { IThemeState } from './store/theme/theme.model';
import GlobalStyles from './global';
import StartPage from './pages/StartPage';
import ThemePage from './pages/ThemePage';
import PauseModal from './modals/PauseModal';
import SettingsModal from './modals/SettingsModal';
import PromptModal from './modals/PromptModal';
import { ThemeProvider } from 'styled-components';
import StartGameModal from './modals/StartGameModal';
import GamePage from './pages/GamePage';

function ViewProvider(): JSX.Element {
	const {
		openedPage,
		openedModal,
		modalProps
	}: IPagesState = useAppSelector((state: RootState) => state.pagesReducer);
	const { currentTheme }: IThemeState = useAppSelector((state: RootState) => state.themeReducer);

	const getOpenedModal = () => {
		switch (openedModal) {
			case ('COUNTDOWN_MODAL'):
				return <StartGameModal/>;
			case ('GAMEOVER_MODAL'):
				return <GameOverModal/>;
			case ('SETTINGS_MODAL'):
				return <SettingsModal/>;
			case ('PROMPT_MODAL'):
				return <PromptModal {...modalProps}/>;
			case ('PAUSE_MODAL'):
				return <PauseModal/>
		}
	};


	const getOpenedPage = () => {
		switch (openedPage) {
			case ('START_PAGE'):
				return <StartPage/>;
			case ('THEMES_PAGE'):
				return <ThemePage/>;
			case ('GAME_PAGE'):
				return <GamePage/>;
		}
	};

	const getOpenedView = (): JSX.Element => {
		const modal = getOpenedModal();
		const page = getOpenedPage();
		return <>{page}{modal}</>;
	};

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles/>
			{getOpenedView()}
		</ThemeProvider>
	);
}
;

export default ViewProvider;