import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './user.model';

const initialState: IUserState = {
	bestScore: 0,
	diamondCount: 0,
	openedThemes: undefined
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;

export const {} = userSlice.actions;

