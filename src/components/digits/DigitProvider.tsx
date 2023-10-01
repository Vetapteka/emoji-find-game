import React, { JSX } from 'react';
import styled from 'styled-components';
import { IconSizeEnum } from '../icons/Icon';

interface WrapperProps {
	size: string;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size }) => size};
  & > svg {
    height: 100%;
	margin: 0 0.3vh;
  }
`;

export interface DigitProps {
	isBold: boolean;
}

interface DigitProviderProps {
	n: number;
	isBold: boolean;
	size: IconSizeEnum;
	style?: {};
}


function DigitProvider({ n, isBold, ...props }: DigitProviderProps): JSX.Element {
	const digits: number[] = n.toString().split('').map(Number);

	const digitComponents: JSX.Element[] = digits.map((digit, index) => {
		const componentName = `Digit${digit}`;
		const DigitComponent = require(`./${componentName}`).default;
		return <DigitComponent isBold={isBold} key={index}/>;
	});

	return <Wrapper {...props} >{digitComponents}</Wrapper>;
}

export default DigitProvider;