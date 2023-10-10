import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedEmojiContainersEnum } from './emojiMapper.model';
import {
	compareCombo,
	findValidEmojiCombo,
	getRandomCombo,
	googleRequestUrl,
	IMergeEmojiCombo
} from './emojiUtils';

export interface IEmojiMapperState {
	activeEmojiContainer: SelectedEmojiContainersEnum;
	rightEmoji: string;
	leftEmoji: string;
	targetEmoji: IMergeEmojiCombo;
	mergedEmojiPath: string;
	winCount: number;
}

const initialState: IEmojiMapperState = {
	activeEmojiContainer: SelectedEmojiContainersEnum.LEFT,
	rightEmoji: '',
	leftEmoji: '',
	targetEmoji: getRandomCombo(),
	mergedEmojiPath: '',
	winCount: 0,
};
export const emojiMapperSlice = createSlice({
		name: 'emojiMapper',
		initialState,
		reducers: {
			setSelectedEmoji: (state, action: PayloadAction<string>): void => {
				switch (state.activeEmojiContainer) {
					case SelectedEmojiContainersEnum.RIGHT:
						state.rightEmoji = action.payload;
						break;
					case SelectedEmojiContainersEnum.LEFT:
						state.leftEmoji = action.payload;
						break;
					case SelectedEmojiContainersEnum.UNKNOWN:
						state.leftEmoji = action.payload;
						state.activeEmojiContainer = SelectedEmojiContainersEnum.LEFT;
						break;
				}

				if (state.rightEmoji && state.leftEmoji) {
					const mergedEmojiCombo: IMergeEmojiCombo = findValidEmojiCombo(state.rightEmoji, state.leftEmoji);

					state.mergedEmojiPath = mergedEmojiCombo ? googleRequestUrl(mergedEmojiCombo) : '';

					if (mergedEmojiCombo && compareCombo(mergedEmojiCombo, state.targetEmoji)) {
						state.winCount += 1;
						state.targetEmoji = getRandomCombo();
					}

				}
			},
			activateEmojiContainer: (state, action: PayloadAction<SelectedEmojiContainersEnum>): void => {
				state.activeEmojiContainer = action.payload;
			},
		}
	})
;

export const { setSelectedEmoji, activateEmojiContainer } = emojiMapperSlice.actions;
export default emojiMapperSlice.reducer;