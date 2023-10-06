import React, { JSX, Suspense } from 'react';
import { useAppSelector } from './hooks/redux';
import { IPagesState } from './store/pages/pages.model';
import PauseModal from './modals/PauseModal';
import { RootState } from './store/store';

const StartPage = React.lazy(() => import('./pages/StartPage'));
const GamePage = React.lazy(() => import('./pages/GamePage'));

function App(): JSX.Element {
	const { openedPage, openedModal }: IPagesState = useAppSelector((state: RootState) => state.pagesReducer);

	return (
		<>
			{openedPage === 'START_PAGE' && <Suspense fallback={'loading.....'}><StartPage/></Suspense>}
			{openedPage === 'GAME_PAGE' && <Suspense fallback={'loading.....'}><GamePage/></Suspense>}
			{openedModal === 'PAUSE_MODAL' && <Suspense fallback={'loading.....'}><PauseModal/></Suspense>}
		</>
	);
}

export default App;