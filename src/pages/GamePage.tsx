import { JSX, useEffect } from 'react';
import styled from 'styled-components';
import { PageContainer, PageContent } from '../components/style/PageContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import Icon, { IconSizeEnum } from '../components/icons/Icon';
import PauseControl from '../components/controls/PauseControl';
import TimeControl from '../components/controls/TimeControl';
import Keyboard from '../components/keyboard/Keyboard';
import TargetEmojiControl from '../components/controls/TargetEmojiControl';
import MergeEmojiControl from '../components/controls/MergeEmojiControl';
import SelectedEmojiPanel from '../components/SelectedEmojiPanel';
import DiamondControl from '../components/controls/DiamondControl';
import WinCountControl from '../components/controls/WinCountControl';
import { KEYBOARD_HEIGHT } from '../constants';
import KeyboardBorder from '../components/borders/KeyboardBorder';

const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CountContainer = styled.div`
  position: absolute;
  top: calc(${IconSizeEnum.S} + 4vmin);
`;

const Content = styled(PageContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

function GamePage(): JSX.Element {
	return (
		<Wrapper>
			<NavigationContainer>
				<Icon icon="TIME_ICON" size={IconSizeEnum.S}/>
				<TimeControl/>
				<PauseControl/>
			</NavigationContainer>
			<CountContainer>
				<WinCountControl/>
				<DiamondControl size={IconSizeEnum.XS}/>
			</CountContainer>
			<Content>
				<TargetEmojiControl/>
				<MergeEmojiControl/>
				<SelectedEmojiPanel/>
			</Content>
			<KeyboardBorder height={KEYBOARD_HEIGHT}>
				<Keyboard/>
			</KeyboardBorder>
		</Wrapper>
	);
}

export default GamePage;