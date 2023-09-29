import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagesState, ModalEnum, PagesEnum } from './pages.model';

const initialState: IPagesState = {
	openedPage: PagesEnum.START_PAGE,
	openedModal: ModalEnum.UNKNOWN,
	isPageBlur: false,
};

export const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		openPage: (state, action: PayloadAction<PagesEnum>): void => {
			state.openedPage = action.payload;
		},
		openModal: (state, action: PayloadAction<ModalEnum>): void => {
			state.openedModal = action.payload;
			state.isPageBlur = true;
		},
		closeModal: (state): void => {
			state.openedModal = ModalEnum.UNKNOWN;
			state.isPageBlur = false;
		},
	}
});

export default pagesSlice.reducer;

export const { openPage, openModal, closeModal } = pagesSlice.actions;

