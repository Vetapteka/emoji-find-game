import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedEmojiContainersEnum } from './emojiMapper.model';
import {
	compareCombo,
	findValidEmojiCombo,
	getRandomCombo,
	googleRequestUrl,
	IMergeEmojiCombo,
	ITargetEmoji
} from './emojiUtils';

export interface IEmojiMapperState {
	activeEmojiContainer: SelectedEmojiContainersEnum;
	rightEmoji: string;
	leftEmoji: string;
	previousTargetEmoji: ITargetEmoji | null;
	targetEmoji: ITargetEmoji | null;
	answer1: string,
	answer2: string,
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
	previousTargetEmoji: null,
	targetEmoji: null,
	answer1: '',
	answer2: '',
	mergedEmojiPath: '',
	winCount: 0,
	diamondsCount: 199,
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


					if (state.targetEmoji && mergedEmojiCombo && compareCombo(mergedEmojiCombo, state.targetEmoji.res)) {
						state.winCount += 1;
						state.diamondsCount += 1;

						if (!state.isItBestScore && state.winCount > state.bestScore)
							state.isItBestScore = true;

						if (state.isItBestScore)
							state.bestScore += 1;

						state.targetEmoji = getRandomCombo();
						state.previousTargetEmoji = state.targetEmoji;
						state.answer1 = '';
						state.answer2 = '';
					}

				}
			},
			activateEmojiContainer: (state, action: PayloadAction<SelectedEmojiContainersEnum>): void => {
				state.activeEmojiContainer = action.payload;
			},
			updatePreviousTargetEmoji: (state): void => {
				state.previousTargetEmoji = state.targetEmoji;
			},
			updateTargetEmoji: (state): void => {
				state.targetEmoji = getRandomCombo();
				state.answer1 = '';
				state.answer2 = '';
			},
			initScore: (state): void => {
				state.isItBestScore = false;
				state.winCount = 0;
				state.leftEmoji = '';
				state.rightEmoji = '';
				state.answer1 = '';
				state.answer2 = '';
				state.targetEmoji = null;
				state.previousTargetEmoji = null;
				state.mergedEmojiPath = '';
				state.activeEmojiContainer = SelectedEmojiContainersEnum.LEFT;
			},
			decreaseDiamonds: (state, action: PayloadAction<number>): void => {
				state.diamondsCount -= action.payload;
			},
			showAnswer: (state): void => {
				state.answer1 = state.targetEmoji?.emoji1 || '';
				state.answer2 = state.targetEmoji?.emoji2 || '';
			},
		}
	})
;

export const {
	showAnswer,
	setSelectedEmoji,
	decreaseDiamonds,
	updateTargetEmoji,
	updatePreviousTargetEmoji,
	initScore,
	activateEmojiContainer
} = emojiMapperSlice.actions;
export default emojiMapperSlice.reducer;