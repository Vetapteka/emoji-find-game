import styled from 'styled-components';
import React, { JSX } from 'react';
import ModalBorder from '../borders/ModalBorder';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ModalContainerProps {
	children: JSX.Element;
}

function ModalContainer({ children }: ModalContainerProps): JSX.Element {
	return (
		<Wrapper>
			<ModalBorder>
				{children}
			</ModalBorder>
		</Wrapper>
	);
}

export default ModalContainer;