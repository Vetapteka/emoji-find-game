import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import BackControl from '../components/controls/BackControl';
import RangeControl from '../components/controls/RangeControl';
import useSoundManager from '../hooks/soundManager/useSoundManager';
import styled from 'styled-components';
import Icon, { IconSizeEnum } from '../components/icons/Icon';

const Field = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4vh;
  align-items: center;
`;

function SettingsModal(): JSX.Element {
	const { setVolumeForSounds, setVolumeForMusic, getSoundVolume, getMusicVolume } = useSoundManager();

	return (
		<ModalContainer>
			<>
				<BackControl/>
				<Field>
					<Icon icon={'MUSIC_ICON'} size={IconSizeEnum.S}/>
					<RangeControl callBack={setVolumeForMusic} initValue={getMusicVolume()}/>
				</Field>
				<Field>
					<Icon icon={'SOUNDS_ICON'} size={IconSizeEnum.S}/>
					<RangeControl callBack={setVolumeForSounds} initValue={getSoundVolume()}/>
				</Field>
			</>
		</ModalContainer>
	);
}

export default SettingsModal;