import { useAppDispatch } from './redux';
import { AppDispatch } from '../store/store';
import { openModal, openPage } from '../store/pages/pages.slice';
import { resetState } from '../store/emoji-mapper/emojiMapper.slice';

function useCustomFunction() {
	const dispatch: AppDispatch = useAppDispatch();

	const startGameHandler = (): void => {
		dispatch(openPage('GAME_PAGE'));
		dispatch(openModal('COUNTDOWN_MODAL'));
		dispatch(resetState());
	};

	return startGameHandler;
}

export default useCustomFunction;

