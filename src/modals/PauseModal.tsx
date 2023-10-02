import React, { JSX } from 'react';
import styled from 'styled-components';
import ModalContainer from '../components/style/ModalContainer';
import SettingsControl from '../components/controls/SettingsControl';
import ContinueGameControl from '../components/controls/ContinueGameControl';
import ThemesControl from '../components/controls/ThemesControl';
import ReplayControl from '../components/controls/ReplayControl';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BackHomeControl from '../components/controls/BackHomeControl';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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
				<Footer>
					<ReplayControl/>
					<ThemesControl/>
				</Footer>
			</Wrapper>
		</ModalContainer>
	);
}

export default PauseModal;