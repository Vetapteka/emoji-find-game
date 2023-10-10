import React, { JSX } from 'react';
import PenBorder from '../borders/PenBorder';

interface PriceContainerProps {
	children: JSX.Element;
}

function PriceContainer({ children }: PriceContainerProps): JSX.Element {
	return (
		<PenBorder size="17vh" isCenter={true} isHoverActive={true}>{children}</PenBorder>
	);
}

export default PriceContainer;