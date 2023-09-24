import React, { useState } from 'react';
import { Container } from './components/Container';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { PageContext, Pages, TPageContext } from './pages/PageContext';
import StartPage from './pages/start-page/StartPage';
import MenuPage from './pages/menu-page/MenuPage';
import GamePage from './pages/game-page/GamePage';

const store = setupStore();

function App() {
	const [page, setPage]: TPageContext = useState<Pages>(Pages.START_PAGE);

	return (
		<Provider store={store}>
			<PageContext.Provider value={[page, setPage]}>
				<Container>
					<button onClick={() => setPage(Pages.START_PAGE)}>start</button>
					<button onClick={() => setPage(Pages.MENU_PAGE)}>menu</button>
					<button onClick={() => setPage(Pages.GAME_PAGE)}>game</button>

					{page === Pages.START_PAGE && <StartPage/>}
					{page === Pages.MENU_PAGE && <MenuPage/>}
					{page === Pages.GAME_PAGE && <GamePage/>}
				</Container>
			</PageContext.Provider>
		</Provider>
	);
}

export default App;