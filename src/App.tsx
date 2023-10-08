import React, { JSX, Suspense } from 'react';
import { useAppSelector } from './hooks/redux';
import { IPagesState } from './store/pages/pages.model';
import { RootState } from './store/store';
import Spinner from './components/Spinner';
import GameOverModal from './modals/GameOverModal';
import { ThemeProvider } from 'styled-components';
import { IThemeState } from './store/theme/theme.model';
import GlobalStyles from './global'

const StartPage = React.lazy(() => import('./pages/StartPage'));
const GamePage = React.lazy(() => import('./pages/GamePage'));
const PauseModal = React.lazy(() => import('./modals/PauseModal'));
const CountdownModal = React.lazy(() => import('./modals/CountdownModal'));

function App(): JSX.Element {
	const { openedPage, openedModal }: IPagesState = useAppSelector((state: RootState) => state.pagesReducer);
	const { theme }: IThemeState = useAppSelector((state: RootState) => state.themeReducer);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{openedPage === 'START_PAGE' && <Suspense fallback={<Spinner/>}><StartPage/></Suspense>}
			{openedPage === 'GAME_PAGE' && <Suspense fallback={<Spinner/>}><GamePage/></Suspense>}
			{openedModal === 'PAUSE_MODAL' && <Suspense fallback={<Spinner/>}><PauseModal/></Suspense>}
			{openedModal === 'COUNTDOWN_MODAL' && <Suspense fallback={<Spinner/>}><CountdownModal/></Suspense>}
			{openedModal === "GAMEOVER_MODAL" && <Suspense fallback={<Spinner/>}><GameOverModal/></Suspense>}
		</ThemeProvider>
	);
}

export default App;