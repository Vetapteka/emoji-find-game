import React, { JSX } from 'react';
import DigitProvider from '../digits/DigitProvider';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import styled from 'styled-components';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface WinCountControlProps {
	size?: IconSizeEnum;
}

function WinCountControl({ size }: WinCountControlProps): JSX.Element {
	const {
		winCount,
		isItBestScore
	}: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);

	return (
		<Wrapper>
			{isItBestScore && <Icon icon="CROWN_ICON" size={IconSizeEnum.XS}/>}
			<DigitProvider n={winCount} isBold={isItBestScore} size={size ?? IconSizeEnum.S}/>
		</Wrapper>
	);
}

export default WinCountControl;