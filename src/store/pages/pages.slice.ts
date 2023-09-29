import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagesState, TPages, TModals } from './pages.model';

const initialState: IPagesState = {
	openedPage: 'START_PAGE',
	previousPage: 'UNKNOWN',
	openedModal: 'UNKNOWN',
	isPageBlur: false,
};

export const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		openPage: (state, action: PayloadAction<TPages>): void => {
			state.previousPage = state.openedPage;
			state.openedPage = action.payload;
		},
		openPreviousPage: (state): void => {
			state.openedPage = state.previousPage;
		},
		openModal: (state, action: PayloadAction<TModals>): void => {
			state.openedModal = action.payload;
			state.isPageBlur = true;
		},
		closeModal: (state): void => {
			state.openedModal = 'UNKNOWN';
			state.isPageBlur = false;
		},
	}
});

export default pagesSlice.reducer;

export const { openPage, openPreviousPage, openModal, closeModal } = pagesSlice.actions;

