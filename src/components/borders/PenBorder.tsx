import styled from 'styled-components';
import { JSX } from 'react';
import { TIME_DASH_WIDTH } from '../../constants';

interface PenBorderProps {
	isActive?: boolean;
	onClick?: () => void;
	children?: JSX.Element | null;
	size?: string;
	width?: string;
	height?: string;
	style?: {};
	className?: string;
	isCenter?: boolean;
	isHoverActive?: boolean;
}

interface WrapperProps {
	size?: string;
	width?: string;
	height?: string;
	isCenter?: boolean;
	isHoverActive?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size, height }) => height || size || '100px'};
  width: ${({ size, width }) => width || size || '100px'};
  position: relative;
  
  & > .border {
    width: 100%;
    height: 100%;

    ${({ isHoverActive }) => isHoverActive ? `
	
	&:hover > :first-child {
	 stroke-dasharray: 10 10;
	}
	` : ''}
  }

  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > img,
  & > .image {
    width: 80%;
    height: 80%;
    margin: 10%;
  }

  ${({ isCenter }) => isCenter ? `
   & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  ` : ''}
  & > .timeDashContainer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 2.5%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: start;

    & > svg {
      width: ${TIME_DASH_WIDTH};
      height: 70%;
      display: inline-block;
    }
  }
`;


function PenBorder({ isActive, children, ...props }: PenBorderProps) {
	return (
		<Wrapper {...props}>
			<svg className="border" preserveAspectRatio="none" viewBox="0 0 411 392" fill="none"
				 xmlns="http://www.w3.org/2000/svg"
				 strokeDasharray={isActive ? '10 10' : 'none'}>
				<path
					d="M403.796 232.787C403.654 241.062 404.948 281.387 403.796 289.571C402.415 299.385 405.468 315.147 403.796 324.916C403.796 363.159 403.796 364.317 367.5 377.57C243.63 383.869 110.689 386.187 102.387 387C81.2968 387 63.9452 384.961 43.7094 377.57C29.8659 372.513 9.13289 360.802 9.13289 343.583C9.13289 317.576 -3.27274 40.6209 14.9024 21.0543C30.6049 4.14964 256.4 10.4884 276.688 6.84824C308.384 6.84824 361.623 -0.768444 390.773 14.9225C403.112 21.5643 409.729 33.6464 403.796 50.2678C403.796 50.2678 403.796 229.611 403.796 241.518"/>
			</svg>
			{children}
		</Wrapper>
	);
}

export default PenBorder;