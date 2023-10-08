import React, { JSX, Suspense } from 'react';
import { useAppSelector } from './hooks/redux';
import { IPagesState } from './store/pages/pages.model';
import { RootState } from './store/store';
import Spinner from './components/Spinner';
import GameOverModal from './modals/GameOverModal';

const StartPage = React.lazy(() => import('./pages/StartPage'));
const GamePage = React.lazy(() => import('./pages/GamePage'));
const PauseModal = React.lazy(() => import('./modals/PauseModal'));
const CountdownModal = React.lazy(() => import('./modals/CountdownModal'));

function App(): JSX.Element {
	const { openedPage, openedModal }: IPagesState = useAppSelector((state: RootState) => state.pagesReducer);

	return (
		<>
			{openedPage === 'START_PAGE' && <Suspense fallback={<Spinner/>}><StartPage/></Suspense>}
			{openedPage === 'GAME_PAGE' && <Suspense fallback={<Spinner/>}><GamePage/></Suspense>}
			{openedModal === 'PAUSE_MODAL' && <Suspense fallback={<Spinner/>}><PauseModal/></Suspense>}
			{openedModal === 'COUNTDOWN_MODAL' && <Suspense fallback={<Spinner/>}><CountdownModal/></Suspense>}
			{openedModal === "GAMEOVER_MODAL" && <Suspense fallback={<Spinner/>}><GameOverModal/></Suspense>}
		</>
	);
}

export default App;