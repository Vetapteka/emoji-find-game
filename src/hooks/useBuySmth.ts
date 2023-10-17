import { AppDispatch, RootState } from '../store/store';
import { useAppDispatch, useAppSelector } from './redux';
import { decreaseDiamonds, showAnswer, updateTargetEmoji } from '../store/emoji-mapper/emojiMapper.slice';

export enum ToDoEnum {
	UPDATE_EMOJI,
	SHOW_ANSWER
}

interface UseBuySmthFuncs {
	buySmth: (price: number, toDo: ToDoEnum) => void,
	toDoSmth: (toDo: ToDoEnum) => void
}

function UseBuySmth(): UseBuySmthFuncs {
	const diamondsCount: number = useAppSelector((state: RootState) => state.emojiMapperReducer.diamondsCount);
	const dispatch: AppDispatch = useAppDispatch();

	const buySmth = (price: number, toDo: ToDoEnum): void => {
		if (diamondsCount >= price) {
			dispatch(decreaseDiamonds(price));
			toDoSmth(toDo);
		}
	};

	const toDoSmth = (toDo: ToDoEnum): void => {
		switch (toDo) {
			case ToDoEnum.UPDATE_EMOJI:
				dispatch(updateTargetEmoji());
				break;
			case ToDoEnum.SHOW_ANSWER:
				dispatch(showAnswer());
				break;

		}
	};

	return { buySmth, toDoSmth };
}

export default UseBuySmth;