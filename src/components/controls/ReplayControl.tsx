import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import useStartGame from '../../hooks/useStartGame';

function ReplayControl(): JSX.Element {
	const startGameHandler = useStartGame();

	return (
		<Icon className="a-hover-up-down" icon="REPLAY_ICON" size={IconSizeEnum.S} onClick={startGameHandler}/>
	);
}

export default ReplayControl