import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import RewardVideoControl from '../components/controls/RewardVideoControl';
import { IconSizeEnum } from '../components/icons/Icon';
import { FooterContainer } from '../components/style/FooterContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import DiamondScoreControl from '../components/controls/DiamondScoreControl';
import styled from 'styled-components';
import ContinueGameControl from '../components/controls/ContinueGameControl';
import BuyForDiamondsControl from '../components/controls/BuyForDiamondsControl';
import { ITodo, ToDoEnum } from '../hooks/useBuySmth';
import UpdateEmojiPromptContent from '../components/controls/UpdateEmojiPromptContent';
import ShowAnswerPromptContent from '../components/controls/ShowAnswerPromptContent';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PromptModalProps {
	toDo: ITodo;
	price: number;
}

function PromptModal({ toDo, price }: PromptModalProps): JSX.Element {
	return (
		<ModalContainer>
			<Wrapper>
				<NavigationContainer className="header">
					<ContinueGameControl size={IconSizeEnum.S} isBackIcon={true}/>
					<DiamondScoreControl size={IconSizeEnum.S}/>
				</NavigationContainer>
				<Content>
					{toDo.action === ToDoEnum.UPDATE_EMOJI
						? <UpdateEmojiPromptContent/>
						: <ShowAnswerPromptContent/>
					}
				</Content>
				<FooterContainer>
					<RewardVideoControl withBorder={true} toDo={toDo}/>
					<BuyForDiamondsControl withBorder={true} price={price} toDo={toDo}/>
				</FooterContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default PromptModal;