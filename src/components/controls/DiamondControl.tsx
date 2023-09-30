import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import Icon, { IconSizeEnum } from '../icons/Icon';
import styled from 'styled-components';
import { IUserState } from '../../store/user/user.model';
import { RootState } from '../../store/store';

const Wrapper = styled.div`
  display: flex;
`;

interface DiamondProps {
	size: IconSizeEnum;
}

function DiamondControl({ size }: DiamondProps) {
	const { diamondCount }: IUserState = useAppSelector((state: RootState) => state.userReducer);
	return (
		<Wrapper>
			<Icon icon="DIAMOND_ICON" size={size}/>
			<span className={'font-s'} style={{ float: 'right' }}>{diamondCount}</span>
		</Wrapper>
	);
}

export default DiamondControl;