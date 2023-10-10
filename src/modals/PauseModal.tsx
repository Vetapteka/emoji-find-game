import React, { JSX } from 'react';
import styled from 'styled-components';
import ModalContainer from '../components/style/ModalContainer';
import SettingsControl from '../components/controls/SettingsControl';
import ContinueGameControl from '../components/controls/ContinueGameControl';
import ThemesControl from '../components/controls/ThemesControl';
import ReplayControl from '../components/controls/ReplayControl';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BackHomeControl from '../components/controls/BackHomeControl';
import { FooterContainer } from '../components/style/FooterContainer';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function PauseModal(): JSX.Element {
	return (
		<ModalContainer>
			<Wrapper>
				<NavigationContainer>
					<BackHomeControl/>
					<SettingsControl/>
				</NavigationContainer>
				<ContinueGameControl/>
				<FooterContainer>
					<ReplayControl/>
					<ThemesControl/>
				</FooterContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default PauseModal;