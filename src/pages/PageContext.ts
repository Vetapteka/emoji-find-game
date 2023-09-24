import { Context, createContext } from 'react';
import { TStateSetter } from '../types';

export enum Pages {
	GAME_PAGE = 'GamePage',
	START_PAGE = 'StartPage',
	MENU_PAGE = 'MenuPage'
}

export type TPageContext = [Pages, TStateSetter<Pages>];

export const PageContext: Context<TPageContext> = createContext<TPageContext>([Pages.START_PAGE, () => {
}]);