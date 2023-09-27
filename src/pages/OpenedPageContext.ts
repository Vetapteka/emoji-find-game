import { Context, createContext } from 'react';
import { TStateSetter } from '../types';

export enum Pages {
	GAME_PAGE = 'GamePage',
	START_PAGE = 'StartPage',
	MENU_PAGE = 'MenuPage'
}

export type TOpenedPageContext = [Pages, TStateSetter<Pages>];

export const OpenedPageContext: Context<TOpenedPageContext> = createContext<TOpenedPageContext>([Pages.START_PAGE, () => {
}]);