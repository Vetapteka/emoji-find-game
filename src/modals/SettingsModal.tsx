import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import BackControl from '../components/controls/BackControl';

function SettingsModal(): JSX.Element {
	return (
		<ModalContainer>
			<BackControl/>
		</ModalContainer>
	);
}

export default SettingsModal;