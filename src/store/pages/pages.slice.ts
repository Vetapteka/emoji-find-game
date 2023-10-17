import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagesState, TPages, IOpenedModal } from './pages.model';

const initialState: IPagesState = {
	openedPage: 'START_PAGE',
	previousPage: 'UNKNOWN',
	openedModal: 'UNKNOWN',
	previousModal: 'UNKNOWN',
	modalProps: null
};

export const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		openPage: (state, action: PayloadAction<TPages>): void => {
			console.log('open page', action.payload);
			state.previousPage = state.openedPage;
			state.openedPage = action.payload;
			state.previousModal = state.openedModal;
			state.openedModal = 'UNKNOWN';
		},
		openPreviousPage: (state): void => {
			state.openedPage = state.previousPage;
			state.openedModal = state.previousModal;
			console.log(state.previousPage, state.openedModal, state.openedPage)
		},
		openModal: (state, action: PayloadAction<IOpenedModal>): void => {
			console.log('open modal ', action.payload);
			state.openedModal = action.payload.type;
			state.modalProps = action.payload.props;
		},
		closeModal: (state): void => {
			console.log('close modal ');
			state.openedModal = 'UNKNOWN';
		},
	}
});

export default pagesSlice.reducer;

export const { openPage, openPreviousPage, openModal, closeModal } = pagesSlice.actions;

