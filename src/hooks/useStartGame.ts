import { useAppDispatch } from './redux';
import { AppDispatch } from '../store/store';
import { openModal, openPage } from '../store/pages/pages.slice';
import { initScore } from '../store/emoji-mapper/emojiMapper.slice';
import { initTimer } from '../store/timer/timer.slice';

function useCustomFunction() {
	const dispatch: AppDispatch = useAppDispatch();

	const startGameHandler = (): void => {
		dispatch(initTimer());
		dispatch(openPage('GAME_PAGE'));
		dispatch(openModal('COUNTDOWN_MODAL'));
		dispatch(initScore());
	};

	return startGameHandler;
}

export default useCustomFunction;

