import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { AppDispatch } from '../../store/store';
import { useAppDispatch } from '../../hooks/redux';
import { openModal } from '../../store/pages/pages.slice';
import { stopTimer } from '../../store/timer/timer.slice';

function UpdateEmojiControl(props: any): JSX.Element {

	const dispatch: AppDispatch = useAppDispatch();
	const openUpdateEmojiModalHandler = (): void => {
		dispatch(openModal('UPDATE_EMOJI_MODAL'));
		dispatch(stopTimer());
	};

	return (
		<Icon style={{ zIndex: '100' }} {...props} icon={'UPDATE_ICON'} size={IconSizeEnum.XS}
			  onClick={openUpdateEmojiModalHandler}/>
	);
}

export default UpdateEmojiControl;