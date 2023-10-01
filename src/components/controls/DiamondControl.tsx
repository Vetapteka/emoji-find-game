import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Icon, { IconSizeEnum } from '../icons/Icon';
import styled from 'styled-components';
import { IUserState } from '../../store/user/user.model';
import { RootState } from '../../store/store';
import DigitProvider from '../digits/DigitProvider';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface DiamondProps {
	size: IconSizeEnum;
}

function DiamondControl({ size }: DiamondProps) {
	const { diamondCount }: IUserState = useAppSelector((state: RootState) => state.userReducer);
	return (
		<Wrapper>
			<Icon icon="DIAMOND_ICON" size={size}/>
			<DigitProvider style={{ marginLeft: '1vh' }} size={size} n={diamondCount} isBold={false}/>
		</Wrapper>
	);
}

export default DiamondControl;