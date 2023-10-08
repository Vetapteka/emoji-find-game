import React from 'react';
import ModalContainer from '../components/style/ModalContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import BackHomeControl from '../components/controls/BackHomeControl';
import SettingsControl from '../components/controls/SettingsControl';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function GameOverModal() {
	return (
		<ModalContainer>
			<Wrapper>
				<NavigationContainer>
					<BackHomeControl/>
					<SettingsControl/>
				</NavigationContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default GameOverModal;