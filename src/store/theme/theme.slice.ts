import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeState, THEMES } from './theme.model';

const initialState: IThemeState = {
	currentTheme: THEMES[0],
	availableThemes: THEMES,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<number>): void => {
			state.currentTheme = THEMES[action.payload];
		},
		buyTheme: (state, action: PayloadAction<number>): void => {
			state.currentTheme = THEMES[action.payload];
		}
	}
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;

