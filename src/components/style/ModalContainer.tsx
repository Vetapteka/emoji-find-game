import React, { JSX } from 'react';
import { ModalBackgroundContainer } from './ModalBackgroundContainer';
import styled from 'styled-components';

interface WrapperProps{
	size?: ModalSizeEnum;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => `calc(${size} * 0.86)`};;
  background: no-repeat center/contain url(${({ theme }) => require(`../../assets/themes/${theme.prefix}/modal-background.svg`)});
  padding: 1.5vh;
`

export enum ModalSizeEnum{
	M = '40vh',
	S = '30vh',
}

interface ModalContainerProps {
	size?: ModalSizeEnum;
	children: JSX.Element;
}

function ModalContainer({ children, size }: ModalContainerProps): JSX.Element {
	return (
		<ModalBackgroundContainer>
			<Wrapper size={size ?? ModalSizeEnum.M} >
				{children}
			</Wrapper>
		</ModalBackgroundContainer>
	);
}

export default ModalContainer;