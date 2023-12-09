import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/pages/pages.slice';
import { ToDoEnum } from '../../hooks/useBuySmth';
import { SHOW_ANSWER_PRICE } from '../../constants';
import { stopTimer } from '../../store/timer/timer.slice';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';


function PromptControl(): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const { playSound }: SoundManager = useSoundManager();

	const openPromptModalHandler = (): void => {
		playSound('ui_click_sound');
		dispatch(openModal({
			type: 'PROMPT_MODAL',
			props: { toDo: { action: ToDoEnum.SHOW_ANSWER }, price: SHOW_ANSWER_PRICE }
		}));
		dispatch(stopTimer());
	};

	return (
		<Icon className="update a-hover-up-down" onClick={openPromptModalHandler} icon="PROMPT_ICON"
			  size={IconSizeEnum.S}/>
	);
}

export default PromptControl;