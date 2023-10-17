import React, { JSX } from 'react';
import PenBorder from '../borders/PenBorder';

interface PriceContainerProps {
	children: JSX.Element;
	onClick?: () => void;
}

function PriceContainer({ children, ...props }: PriceContainerProps): JSX.Element {
	return (
		<PenBorder {...props} size="17vh" isCenter={true} isHoverActive={true}>{children}</PenBorder>
	);
}

export default PriceContainer;