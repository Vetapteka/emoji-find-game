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
    right: -1.5vh;
  }
`;

function TargetEmojiControl({...props}): JSX.Element {
	return (
		<Wrapper {...props}>
			<UpdateEmojiControl className="update"/>
			<PenBorder size={TARGET_EMOJI_CONTAINER_SIZE}>
				<TargetEmojiSimpleControl/>
			</PenBorder>
		</Wrapper>
	);
}

export default TargetEmojiControl;