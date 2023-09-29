import styled from 'styled-components';

interface PenBorderProps {
	isActive?: boolean;
	onClick?: () => void;
	children: JSX.Element | null;
	size?: string;
	width?: string;
	height?: string;
}

interface WrapperProps {
	size?: string;
	width?: string;
	height?: string;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ size, height }) => height || size || '100px'};
  width: ${({ size, width }) => width || size || '100px'};
  position: relative;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > img {
    width: 80%;
    height: 80%;
    padding: 10%;
  }
`;

const BORDER_DEFAULT_COLOR = '#71A7FC';
const BORDER_ACTIVE_COLOR = '#325997';

function PenBorder({ isActive, onClick, children, size, height, width }: PenBorderProps) {
	return (
		<Wrapper onClick={onClick} size={size} height={height} width={width}>
			<svg preserveAspectRatio="none" viewBox="0 0 411 392" fill="none" xmlns="http://www.w3.org/2000/svg"
				 stroke={isActive ? BORDER_ACTIVE_COLOR : BORDER_DEFAULT_COLOR}
				 stroke-width="0.4vh">
				<path vector-effect="non-scaling-stroke"
					  d="M403.796 232.787C403.654 241.062 404.948 281.387 403.796 289.571C402.415 299.385 405.468 315.147 403.796 324.916C403.796 363.159 403.796 364.317 367.5 377.57C243.63 383.869 110.689 386.187 102.387 387C81.2968 387 63.9452 384.961 43.7094 377.57C29.8659 372.513 9.13289 360.802 9.13289 343.583C9.13289 317.576 -3.27274 40.6209 14.9024 21.0543C30.6049 4.14964 256.4 10.4884 276.688 6.84824C308.384 6.84824 361.623 -0.768444 390.773 14.9225C403.112 21.5643 409.729 33.6464 403.796 50.2678C403.796 50.2678 403.796 229.611 403.796 241.518"
					  stroke-linecap="round"/>
			</svg>
			{children}
		</Wrapper>
	);
}

export default PenBorder;