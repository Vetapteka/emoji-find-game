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
	targetEmoji: IMergeEmojiCombo | null;
	mergedEmojiPath: string;
	winCount: number;
	diamondsCount: number;
	bestScore: number;
	isItBestScore: boolean;
}

const initialState: IEmojiMapperState = {
	activeEmojiContainer: SelectedEmojiContainersEnum.LEFT,
	rightEmoji: '',
	leftEmoji: '',
	targetEmoji: null,
	mergedEmojiPath: '',
	winCount: 0,
	diamondsCount: 0,
	bestScore: 0,
	isItBestScore: false,
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


					if (state.targetEmoji && mergedEmojiCombo && compareCombo(mergedEmojiCombo, state.targetEmoji)) {
						state.winCount += 1;
						state.diamondsCount += 1;

						if (!state.isItBestScore && state.winCount > state.bestScore)
							state.isItBestScore = true;

						if (state.isItBestScore)
							state.bestScore += 1;

						state.targetEmoji = getRandomCombo();
					}

				}
			},
			activateEmojiContainer: (state, action: PayloadAction<SelectedEmojiContainersEnum>): void => {
				state.activeEmojiContainer = action.payload;
			},
			updateTargetEmoji: (state): void => {
				state.targetEmoji = getRandomCombo();
			},
			initScore: (state): void => {
				state.isItBestScore = false;
				state.winCount = 0;
				state.leftEmoji = '';
				state.rightEmoji = '';
				state.targetEmoji = null;
				state.mergedEmojiPath = '';
				state.activeEmojiContainer = SelectedEmojiContainersEnum.LEFT;
			},
			decreaseDiamonds: (state, action: PayloadAction<number>): void => {
				state.diamondsCount -= action.payload;
			}
		}
	})
;

export const {
	setSelectedEmoji,
	decreaseDiamonds,
	updateTargetEmoji,
	initScore,
	activateEmojiContainer
} = emojiMapperSlice.actions;
export default emojiMapperSlice.reducer;