import React, { JSX, Suspense } from 'react';
import { useAppSelector } from './hooks/redux';
import { IPagesState, PagesEnum } from './store/pages/pages.model';

const StartPage = React.lazy(() => import('./pages/start-page/StartPage'));
const GamePage = React.lazy(() => import('./pages/game-page/GamePage'));

function App(): JSX.Element {
	const { openedPage, openedModal }: IPagesState = useAppSelector(state => state.pagesReducer);
	return (
		<>
			{openedPage === PagesEnum.START_PAGE && <Suspense fallback={'loading.....'}><StartPage/></Suspense>}
			{openedPage === PagesEnum.GAME_PAGE && <Suspense fallback={'loading.....'}><GamePage/></Suspense>}
		</>
	);
}

export default App;