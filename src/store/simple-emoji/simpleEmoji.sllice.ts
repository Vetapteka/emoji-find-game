import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSimpleEmoji } from './simpleEmoji.actions';
import { ISimpleEmojiModel, TEmojiList } from './simpleEmoji.model';

export interface ISimpleEmojiState {
	isEmpty: boolean,
	emojiList: TEmojiList,
	isLoading: boolean,
	error: string
}

const initialState: ISimpleEmojiState = {
	isEmpty: true,
	isLoading: false,
	error: '',
	emojiList: {}
};

let emojiCount = 0;

export const simpleEmojiSlice = createSlice({
	name: 'simpleEmoji',
	initialState,
	reducers: {},
	extraReducers: {
		[getSimpleEmoji.fulfilled.type]: (state, action: PayloadAction<ISimpleEmojiModel>): void => {
			const { code, svg } = action.payload;
			state.error = '';
			state.emojiList[code] = svg;
			emojiCount++;
			state.isLoading = emojiCount <= 600;
			state.isEmpty = false;
		},
		[getSimpleEmoji.pending.type]: (state): void => {
			state.isLoading = true;
		},
		[getSimpleEmoji.rejected.type]: (state, action: PayloadAction<string>): void => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export default simpleEmojiSlice.reducer;
