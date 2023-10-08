import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagesState, TPages, TModals } from './pages.model';

const initialState: IPagesState = {
	openedPage: 'START_PAGE',
	previousPage: 'UNKNOWN',
	openedModal: 'UNKNOWN',
};

export const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		openPage: (state, action: PayloadAction<TPages>): void => {
			state.openedModal = 'UNKNOWN';
			state.previousPage = state.openedPage;
			state.openedPage = action.payload;
		},
		openPreviousPage: (state): void => {
			state.openedPage = state.previousPage;
		},
		openModal: (state, action: PayloadAction<TModals>): void => {
			console.log('open modal ', action.payload);
			state.openedModal = action.payload;
		},
		closeModal: (state): void => {
			console.log('close modal ');
			state.openedModal = 'UNKNOWN';
		},
	}
});

export default pagesSlice.reducer;

export const { openPage, openPreviousPage, openModal, closeModal } = pagesSlice.actions;

