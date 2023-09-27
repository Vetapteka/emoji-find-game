import { useEffect } from 'react';
import { getSimpleEmoji } from '../store/simple-emoji/emoji.actions';
import { useAppDispatch, useAppSelector } from './redux';
import { IEmojiState } from '../store/simple-emoji/emoji.sllice';
import { emojiCategories } from '../data/emojiCodes';

function useInitSimpleEmoji(): void {
	const dispatch = useAppDispatch();
	const { isEmpty }: IEmojiState = useAppSelector(state => state.simpleEmojiReducer);

	useEffect((): void => {
		if (isEmpty) {
			Object.values(emojiCategories).forEach(list => {
				list.forEach((code: string) => dispatch(getSimpleEmoji(code)));
			});
		}
	}, []);

}

export default useInitSimpleEmoji;