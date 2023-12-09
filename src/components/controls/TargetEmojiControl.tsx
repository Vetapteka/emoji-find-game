import React, { JSX } from 'react';
import { TARGET_EMOJI_CONTAINER_SIZE } from '../../constants';
import PenBorder from '../borders/PenBorder';
import styled from 'styled-components';
import UpdateEmojiControl from './UpdateEmojiControl';
import TargetEmojiSimpleControl from './TargerEmojiSimpleControl';

const Wrapper = styled.div`
  position: relative;

  & > .update {
    position: absolute;
    top: -0.7vh;
    right: -1.7vh;
	
	&::before{
      content: '';
      position: absolute;
      top: -0.17vh;
	  z-index: -5;
	  right: 0;
      width: 100%;
      height: 100%; 
      border-radius: 50%; 
      background-color: ${({ theme }) => theme.background_color ?? 'white'}; 
	}
  }
`;

function TargetEmojiControl({...props}): JSX.Element {
	return (
		<Wrapper {...props}>
			<UpdateEmojiControl className="update a-hover-up-down"/>
			<PenBorder size={TARGET_EMOJI_CONTAINER_SIZE}>
				<TargetEmojiSimpleControl/>
			</PenBorder>
		</Wrapper>
	);
}

export default TargetEmojiControl;