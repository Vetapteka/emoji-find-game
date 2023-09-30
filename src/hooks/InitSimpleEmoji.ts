import { useEffect } from 'react';
import { getSimpleEmoji } from '../store/emoji/emoji.actions';
import { useAppDispatch, useAppSelector } from './redux';
import { IEmojiState } from '../store/emoji/emoji.sllice';
import { emojiCodes } from '../data/emojiCodes';

function useInitSimpleEmoji(): void {
	const dispatch = useAppDispatch();
	const { isEmpty }: IEmojiState = useAppSelector(state => state.emojiReducer);

	useEffect((): void => {
		if (isEmpty) {
			Object.values(emojiCodes).forEach((list: string[]): void => {
				list.forEach((code: string) => dispatch(getSimpleEmoji(code)));
			});
		}
	}, []);
}

export default useInitSimpleEmoji;