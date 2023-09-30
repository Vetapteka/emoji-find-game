import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSimpleEmoji } from './emoji.actions';
import { IEmojiModel, TEmojiList } from './emoji.model';
import { allEmoji } from '../../data/emojiCodes';

export interface IEmojiState {
	isEmpty: boolean,
	emojiList: TEmojiList,
	isLoading: boolean,
	error: string
}

const initialState: IEmojiState = {
	isEmpty: true,
	isLoading: true,
	error: '',
	emojiList: {}
};

let emojiCount = 0;

export const emojiSlice = createSlice({
	name: 'emoji',
	initialState,
	reducers: {},
	extraReducers: {
		[getSimpleEmoji.fulfilled.type]: (state, action: PayloadAction<IEmojiModel>): void => {
			const { code, svg } = action.payload;
			state.error = '';
			state.emojiList[code] = svg;
			emojiCount++;
			if (emojiCount >= allEmoji.length)
				state.isLoading = false;
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

export default emojiSlice.reducer;
