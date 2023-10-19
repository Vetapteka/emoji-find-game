import { AppDispatch, RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from './redux';
import { decreaseDiamonds, showAnswer, updateTargetEmoji } from '../store/emoji-mapper/emojiMapper.slice';
import { buyTheme } from '../store/theme/theme.slice';

export enum ToDoEnum {
	UPDATE_EMOJI,
	SHOW_ANSWER,
	BUY_THEME
}

export interface ITodo {
	action: ToDoEnum,
	payload?: any
}

interface UseBuySmthFuncs {
	buySmth: (price: number, toDo: ITodo) => void,
	toDoSmth: (toDo: ITodo) => void
}

function UseBuySmth(): UseBuySmthFuncs {
	const diamondsCount: number = useAppSelector((state: RootState) => state.emojiMapperReducer.diamondsCount);
	const dispatch: AppDispatch = useAppDispatch();

	const buySmth = (price: number, toDo: ITodo): void => {
		console.log('buy')
		if (diamondsCount >= price) {
			dispatch(decreaseDiamonds(price));
			toDoSmth(toDo);
		}
	};

	const toDoSmth = (toDo: ITodo): void => {
		switch (toDo.action) {
			case ToDoEnum.UPDATE_EMOJI:
				dispatch(updateTargetEmoji());
				break;
			case ToDoEnum.SHOW_ANSWER:
				dispatch(showAnswer());
				break;
			case ToDoEnum.BUY_THEME:
				dispatch(buyTheme(toDo.payload));
				break;

		}
	};

	return { buySmth, toDoSmth };
}

export default UseBuySmth;