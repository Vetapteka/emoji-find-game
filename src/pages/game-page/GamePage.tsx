import useInitSimpleEmoji from '../../hooks/InitSimpleEmoji';
import Keyboard from './keyboard/Keyboard';
import Header from './header/Header';
import styled from 'styled-components';
import Content from './content/Content';
import { ContentContainer, HeaderContainer, KeyboardContainer } from './containers';
import { PageContainer } from '../PageContainer';

const Wrapper = styled(PageContainer)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

`;

function GamePage(): JSX.Element {
	useInitSimpleEmoji();
	return (
		<Wrapper>
			<HeaderContainer><Header/></HeaderContainer>
			<ContentContainer><Content/></ContentContainer>
			<KeyboardContainer><Keyboard/></KeyboardContainer>
		</Wrapper>
	);
};

export default GamePage;