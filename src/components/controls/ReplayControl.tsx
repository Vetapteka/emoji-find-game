import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';
import useStartGame from '../../hooks/useStartGame';
import useSoundManager, { SoundManager } from '../../hooks/soundManager/useSoundManager';

function ReplayControl(): JSX.Element {
	const startGame = useStartGame();
	const { playSound }: SoundManager = useSoundManager();

	const replayHandler = (): void => {
		playSound('ui_click_sound');
		startGame();
	};

	return (
		<Icon className="a-hover-up-down" icon="REPLAY_ICON" size={IconSizeEnum.S} onClick={replayHandler}/>
	);
}

export default ReplayControl;