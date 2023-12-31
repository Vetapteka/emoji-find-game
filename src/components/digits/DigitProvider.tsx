import React, { JSX } from 'react';
import styled from 'styled-components';
import { IconSizeEnum } from '../icons/Icon';
import { AnimationContainer } from '../style/AnimationContainer';

interface WrapperProps {
	size: string;
	$isColorChanged?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size }) => size};

  & > svg {
    height: 100%;
    margin: 0 0.3vh;
    ${({ theme, $isColorChanged }) => $isColorChanged && theme.prefix === 'dark' ? 'stroke: white' : ''};
  }
`;

export interface DigitProps {
	isBold: boolean;
}

export interface DigitProviderProps {
	n: number;
	isBold: boolean;
	size: IconSizeEnum;
	style?: {};
	isAnimated?: boolean;
	isColorChanged?: boolean;
}


function DigitProvider({ n, isBold, isAnimated, isColorChanged, ...props }: DigitProviderProps): JSX.Element {
	const digits: number[] = n.toString().split('').map(Number);

	const digitComponents: JSX.Element[] = digits.map((digit, index) => {
		const componentName = `Digit${digit}`;
		const DigitComponent = require(`./${componentName}`).default;
		return <DigitComponent isBold={isBold} key={index}/>;
	});

	return <>{isAnimated
		? <AnimationContainer><Wrapper $isColorChanged={isColorChanged} {...props} >{digitComponents}</Wrapper></AnimationContainer>
		: <Wrapper $isColorChanged={isColorChanged} {...props} >{digitComponents}</Wrapper>}</>;
}

export default DigitProvider;