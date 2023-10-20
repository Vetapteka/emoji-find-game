import { JSX } from 'react';
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
import DiamondScoreControl from '../components/controls/DiamondScoreControl';
import WinCountControl from '../components/controls/WinCountControl';
import { KEYBOARD_HEIGHT } from '../constants';
import KeyboardBorder from '../components/borders/KeyboardBorder';
import PromptControl from '../components/controls/PromptControl';

const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  position: relative;

`;

const CountContainer = styled.div`
  position: absolute;
  top: calc(${IconSizeEnum.S} + 4vmin);
  left: 2vmin;
`;

const PromptContainer = styled.div`
  position: absolute;
  top: calc(${IconSizeEnum.S} + 4vmin);
  right: 2vmin;
`;

const Content = styled(PageContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

function GamePage(): JSX.Element {
	return (
		<Wrapper className="a-appear">
			<NavigationContainer>
				<Icon icon="TIME_ICON" size={IconSizeEnum.S}/>
				<TimeControl/>
				<PauseControl/>
			</NavigationContainer>
			<CountContainer>
				<WinCountControl/>
				<DiamondScoreControl size={IconSizeEnum.XS}/>
			</CountContainer>
			<PromptContainer>
				<PromptControl/>
			</PromptContainer>
			<Content>
				<TargetEmojiControl className="target_emoji"/>
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