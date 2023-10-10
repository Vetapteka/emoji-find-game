import emojiData from '../../data/mergeEmojiData.json';
import { allEmoji } from '../../data/emojiCodes';

export interface IMergeEmojiCombo {
	date: string;
	leftEmoji: string;
	rightEmoji: string;
}

export interface IMergeEmojiData {
	[key: string]: IMergeEmojiCombo[];
}

const mergeEmojiData = emojiData as IMergeEmojiData;

export const compareCombo = (combo1: IMergeEmojiCombo, combo2: IMergeEmojiCombo): boolean => {
	return combo1.leftEmoji === combo2.leftEmoji && combo1.rightEmoji === combo2.rightEmoji;
};

export const getRandomCombo = ():  IMergeEmojiCombo => {
	let res;
	while (!res) {
		const randomEmoji1 = getRandomEmoji();
		const randomEmoji2 = getRandomEmoji();
		res = findValidEmojiCombo(randomEmoji1, randomEmoji2);
	}
	return res;
};

const getRandomEmoji = (): string => {
	const randomIndex = randomInteger(0, allEmoji.length - 1);
	return allEmoji[randomIndex];
};

const randomInteger = (min: number, max: number): number => {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
};

export const findValidEmojiCombo = (leftEmoji: string, rightEmoji: string): IMergeEmojiCombo => {
	return (
		mergeEmojiData[leftEmoji]
			.filter((combo: IMergeEmojiCombo) => combo.leftEmoji === leftEmoji && combo.rightEmoji === rightEmoji)
			.sort((a: IMergeEmojiCombo, b: IMergeEmojiCombo): number => (a.date > b.date ? 1 : -1))
			.pop() ??
		mergeEmojiData[leftEmoji]
			.filter((combo: IMergeEmojiCombo) => combo.leftEmoji === rightEmoji && combo.rightEmoji === leftEmoji)
			.sort((a: IMergeEmojiCombo, b: IMergeEmojiCombo): number => (a.date > b.date ? 1 : -1))
			.pop()! ?? null
	);
};

const GOOGLE_URL = 'https://www.gstatic.com/android/keyboard/emojikitchen';

export const googleRequestUrlEmojiPart = (emoji: string): string => {
	return emoji
		.split('-')
		.map((part: string) => `u${part.toLowerCase()}`)
		.join('-');
};

export const googleRequestUrlEmojiFilename = (combo: IMergeEmojiCombo): string => {
	return `${googleRequestUrlEmojiPart(
		combo.leftEmoji
	)}_${googleRequestUrlEmojiPart(combo.rightEmoji)}.png`;
};

export const googleRequestUrl = (combo: IMergeEmojiCombo): string => {
	return `${GOOGLE_URL}/${combo.date}/${googleRequestUrlEmojiPart(
		combo.leftEmoji
	)}/${googleRequestUrlEmojiFilename(combo)}`;
};
