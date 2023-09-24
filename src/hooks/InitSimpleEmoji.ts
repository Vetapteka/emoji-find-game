import { useEffect } from 'react';
import { getSimpleEmoji } from '../store/simple-emoji/simpleEmoji.actions';
import { useAppDispatch, useAppSelector } from './redux';
import { ISimpleEmojiState } from '../store/simple-emoji/simpleEmoji.sllice';
import { emojiCategories } from '../data/emoji';

function useInitSimpleEmoji(): void {
	const dispatch = useAppDispatch();
	const { isEmpty }: ISimpleEmojiState = useAppSelector(state => state.simpleEmojiReducer);

	useEffect((): void => {
		if (isEmpty) {
			Object.values(emojiCategories).forEach(list => {
				list.forEach((code: string) => dispatch(getSimpleEmoji(code)));
			});
		}
	}, []);

}

export default useInitSimpleEmoji;