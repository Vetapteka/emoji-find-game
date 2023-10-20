import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/pages/pages.slice';
import { stopTimer } from '../../store/timer/timer.slice';
import { ToDoEnum } from '../../hooks/useBuySmth';
import { UPDATE_EMOJI_PRICE } from '../../constants';

function UpdateEmojiControl(props: any): JSX.Element {
	const dispatch: AppDispatch = useAppDispatch();
	const openUpdateEmojiModalHandler = (): void => {
		dispatch(openModal({ type: 'PROMPT_MODAL', props: { toDo: {action: ToDoEnum.UPDATE_EMOJI}, price: UPDATE_EMOJI_PRICE } }));
		dispatch(stopTimer());
	};

	return (
		<Icon className="a-hover-up-down" style={{ zIndex: '100' }} {...props} icon={'UPDATE_ICON'} size={IconSizeEnum.XS}
			  onClick={openUpdateEmojiModalHandler}/>
	);
}

export default UpdateEmojiControl;