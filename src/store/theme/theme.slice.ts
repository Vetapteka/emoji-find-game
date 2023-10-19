import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import { IThemeState } from './theme.model';

const initialState: IThemeState = {
	currentTheme: { stroke: '#71A7FC', prefix: 'blue', price: null, index: 0 },
	availableThemes: [
		{ stroke: '#71A7FC', prefix: 'blue', price: null, index: 0 },
		{ stroke: '#F2A8A8', prefix: 'pink', price: null, index: 1 },
		{ stroke: '#DD638F', prefix: 'magenta', price: 'reward', index: 2 },
		{ stroke: '#09234B', prefix: 'black', price: 600, index: 3 },
		{ stroke: '#FFC907', prefix: 'yellow', price: 300, index: 4 },
		{ stroke: '#A5BE15', prefix: 'green', price: 23, index: 5 },
		{ stroke: '#866666', prefix: 'brown', price: 'reward', index: 6 },
		{ stroke: '#52575E', prefix: 'dark', price: 'reward', index: 7 },
		{ stroke: '#EE3B14', prefix: 'red', price: 34, index: 8 },
		{ stroke: '#A463C3', prefix: 'violet', price: 0, index: 9 }
	],
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<number>): void => {
			const theme = state.availableThemes[action.payload];
			if (theme.price === null)
				state.currentTheme = theme;
		},
		buyTheme: (state, action: PayloadAction<number>): void => {
			const theme = state.availableThemes[action.payload];
			state.availableThemes[action.payload].price = null;
			state.currentTheme = theme;
		},
	}
});

export default themeSlice.reducer;

export const { setTheme, buyTheme } = themeSlice.actions;

