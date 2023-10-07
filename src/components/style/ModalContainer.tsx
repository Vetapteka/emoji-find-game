import React, { JSX } from 'react';
import ModalBorder from '../borders/ModalBorder';
import { ModalBackgroundContainer } from './ModalBackgroundContainer';

export enum ModalSizeEnum{
	M = '48vh',
	S = '30vh',
}

interface ModalContainerProps {
	size?: ModalSizeEnum;
	children: JSX.Element;
}

function ModalContainer({ children, size }: ModalContainerProps): JSX.Element {
	return (
		<ModalBackgroundContainer>
			<ModalBorder size={size ?? ModalSizeEnum.M} >
				{children}
			</ModalBorder>
		</ModalBackgroundContainer>
	);
}

export default ModalContainer;