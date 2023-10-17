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

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
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
			<Content>
				<Header>
					<div>
						<WinCountControl/>
						<DiamondScoreControl size={IconSizeEnum.XS}/>
					</div>
					<TargetEmojiControl style={{ alignSelf: 'center' }}/>
					<PromptControl/>
				</Header>
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