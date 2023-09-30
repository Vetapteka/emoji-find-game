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

const Wrapper = styled(PageContainer)`
  display: flex;
  flex-direction: column;
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
				<TargetEmojiControl/>
				<MergeEmojiControl/>
				<SelectedEmojiPanel/>
			</Content>
			<Keyboard/>
		</Wrapper>

	);
};

export default GamePage;