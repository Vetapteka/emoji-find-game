import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BackHomeControl from '../components/controls/BackHomeControl';
import SettingsControl from '../components/controls/SettingsControl';
import styled from 'styled-components';
import ReplayControl from '../components/controls/ReplayControl';
import ThemesControl from '../components/controls/ThemesControl';
import { FooterContainer } from '../components/style/FooterContainer';
import WinCountControl from '../components/controls/WinCountControl';
import { IconSizeEnum } from '../components/icons/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function GameOverModal(): JSX.Element {
	return (
		<ModalContainer>
			<Wrapper>
				<NavigationContainer>
					<BackHomeControl/>
					<SettingsControl/>
				</NavigationContainer>
				<WinCountControl size={IconSizeEnum.L}/>
				<FooterContainer>
					<ReplayControl/>
					<ThemesControl/>
				</FooterContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default GameOverModal;