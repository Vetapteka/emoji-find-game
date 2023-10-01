import React, { JSX } from 'react';
import DigitProvider from '../digits/DigitProvider';
import Icon, { IconSizeEnum } from '../icons/Icon';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function WinCountControl(): JSX.Element {
	const winCount: number = useAppSelector((state: RootState) => state.emojiMapperReducer.winCount);
	const bestScore: number = useAppSelector((state: RootState) => state.userReducer.bestScore);

	const isBestScoreChange = winCount > bestScore;

	return (
		<Wrapper>
			{isBestScoreChange && <Icon icon="CROWN_ICON" size={IconSizeEnum.XS}/>}
			<DigitProvider n={winCount} isBold={isBestScoreChange} size={IconSizeEnum.S}/>
		</Wrapper>
	);
}

export default WinCountControl;