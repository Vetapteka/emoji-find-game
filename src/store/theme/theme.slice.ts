import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IThemeState, THEMES } from './theme.model';

const initialState: IThemeState = {
	theme: THEMES[0]
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<number>): void => {
			state.theme = THEMES[action.payload];
		}
	}
});

export default themeSlice.reducer;

export const { setTheme } = themeSlice.actions;

