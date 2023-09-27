import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { OpenedPageContext, Pages, TOpenedPageContext } from './pages/OpenedPageContext';
import StartPage from './pages/start-page/StartPage';
import MenuPage from './pages/menu-page/MenuPage';
import GamePage from './pages/game-page/GamePage';

const store = setupStore();

function App() {
	const [page, setPage]: TPageContext = useState<Pages>(Pages.START_PAGE);

	return (
		<Provider store={store}>
			<PageContext.Provider value={[page, setPage]}>
				<button style={{position: 'absolute', top: '0', left: '0'}} onClick={() => setPage(Pages.START_PAGE)}>start</button>
				<button style={{position: 'absolute', top: '70px', left: '0'}} onClick={() => setPage(Pages.MENU_PAGE)}>menu</button>
				<button style={{position: 'absolute', top: '100px', left: '0'}} onClick={() => setPage(Pages.GAME_PAGE)}>game</button>

					{page === Pages.START_PAGE && <StartPage/>}
					{page === Pages.MENU_PAGE && <MenuPage/>}
					{page === Pages.GAME_PAGE && <GamePage/>}

			</PageContext.Provider>
		</Provider>
	);
}

export default App;