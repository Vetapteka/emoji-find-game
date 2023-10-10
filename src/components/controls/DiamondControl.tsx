import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Icon, { IconSizeEnum } from '../icons/Icon';
import styled from 'styled-components';
import { IUserState } from '../../store/user/user.model';
import { RootState } from '../../store/store';
import DigitProvider from '../digits/DigitProvider';
import { IEmojiMapperState } from '../../store/emoji-mapper/emojiMapper.slice';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface DiamondProps {
	size: IconSizeEnum;
}

function DiamondControl({ size }: DiamondProps) {
	const { diamondsCount }: IEmojiMapperState = useAppSelector((state: RootState) => state.emojiMapperReducer);
	return (
		<Wrapper>
			<Icon icon="DIAMOND_ICON" size={size}/>
			<DigitProvider style={{ marginLeft: '1vh' }} size={size} n={diamondsCount} isBold={false}/>
		</Wrapper>
	);
}

export default DiamondControl;