import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StartPage from './pages/start-page/StartPage';
import GamePage from './pages/game-page/GamePage';
import MenuPage from './pages/menu-page/MenuPage';
import { Container } from './components/Container';

const router = createBrowserRouter([
	{
		path: '/',
		element: <StartPage/>,
	},
	{
		path: '/game',
		element: <GamePage/>,
	},
	{
		path: '/menu',
		element: <MenuPage/>,
	},
]);

function App() {
	return (
		<Container>
			<RouterProvider router={router}/>
		</Container>
	);
}

export default App;