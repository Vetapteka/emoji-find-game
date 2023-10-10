import React, { JSX } from 'react';
import ModalContainer from '../components/style/ModalContainer';
import RewardVideoControl from '../components/controls/RewardVideoControl';
import BuyForDiamondsControl from '../components/controls/BuyForDiamondsControl';
import { IconSizeEnum } from '../components/icons/Icon';
import { FooterContainer } from '../components/style/FooterContainer';
import { NavigationContainer } from '../components/style/NavigationContainer';
import DiamondScoreControl from '../components/controls/DiamondScoreControl';
import styled from 'styled-components';
import ContinueGameControl from '../components/controls/ContinueGameControl';
import PriceContainer from '../components/style/PriceContainer';


const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > .footer {
    flex-grow: 1;
  }
`;

function UpdateTargetEmojiModal(): JSX.Element {
	return (
		<ModalContainer>
			<Wrapper>
				<NavigationContainer className='header'>
					<ContinueGameControl size={IconSizeEnum.S} isBackIcon={true}/>
					<DiamondScoreControl size={IconSizeEnum.S}/>
				</NavigationContainer>
				<FooterContainer className='footer'>
					<PriceContainer><RewardVideoControl/></PriceContainer>
					<PriceContainer><BuyForDiamondsControl  price={15}/></PriceContainer>
				</FooterContainer>
			</Wrapper>
		</ModalContainer>
	);
}

export default UpdateTargetEmojiModal;