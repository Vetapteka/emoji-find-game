import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import RewardVideoControl from '../components/controls/RewardVideoControl';
import { IconSizeEnum } from '../components/icons/Icon';
import { FooterContainer } from '../components/style/FooterContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import DiamondScoreControl from '../components/controls/DiamondScoreControl';
import styled from 'styled-components';
import ContinueGameControl from '../components/controls/ContinueGameControl';
import TargetEmojiSimpleControl from '../components/controls/TargerEmojiSimpleControl';
import BuyForDiamondsControl from '../components/controls/BuyForDiamondsControl';
import { ToDoEnum } from '../hooks/useBuySmth';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > .content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      width: 9vh;
    }
  }
`;

interface PromptModalProps {
	toDo: ToDoEnum;
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
				<div className="content">
					<TargetEmojiSimpleControl className="emoji"/>
				</div>
				<FooterContainer>
					<RewardVideoControl withBorder={true} toDo={toDo}/>
					<BuyForDiamondsControl price={price} toDo={toDo}/>
				</FooterContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default PromptModal;