import React, { JSX } from 'react';
import styled from 'styled-components';
import { KEYBOARD_HEIGHT } from '../../constants';

interface WrapperProps {
	height: string;
}

const Wrapper = styled.div<WrapperProps>`
  height: ${({ height }) => height};
  position: relative;
  z-index: 1;

  & > .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > .switchers {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(${KEYBOARD_HEIGHT} * 0.14);
    width: 100%;
    display: flex;
	z-index: 2;
  }
  
  & > .keys {
    position: absolute;
	top: calc(${KEYBOARD_HEIGHT} * 0.14);
	width: 96%;
	height: calc(${KEYBOARD_HEIGHT} * 0.80);
	box-sizing: border-box;
	margin: 0 2%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    border-radius: calc(0.04 * ${KEYBOARD_HEIGHT});
	
    z-index: 2;
  }
  
`;

interface KeyboardBorderProps {
	height: string;
	children: JSX.Element;
}

function KeyboardBorder({ height, children }: KeyboardBorderProps): JSX.Element {
	return (
		<Wrapper height={height}>
			{children}
			<svg className={'border'} preserveAspectRatio="none" viewBox="0 0 1429 1223" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20.6243 5H366.309H662.192H1128.96H1201.12C1250.18 5 1299.37 7.29675 1348.68 7.29675H1382.55C1389.86 7.29675 1405.64 11.1294 1411.55 16.6855C1420.05 24.6871 1420.05 38.9439 1420.05 51.0921V51.6855C1425.25 79.2255 1413.24 398.17 1413.24 427.039C1413.24 444.454 1417.04 841.031 1417.04 858.241V936.33C1417.04 987.63 1420.94 1036.6 1420.94 1088.04C1420.94 1113.91 1422.07 1140.19 1422.89 1165.37C1423.22 1175.19 1423.65 1198.41 1417.04 1206.2C1410.31 1214.11 1402.93 1217.68 1393.6 1217.68C1360.81 1217.68 1039.73 1209.43 1007.55 1215.26H815.544C762.767 1215.26 490.333 1210.79 437.595 1210.79C373.997 1210.79 311.646 1208.49 248.151 1208.49H47.5469C31.4356 1208.49 10.1273 1200.78 10.1273 1178.64C10.1273 1150.96 8.90623 1115.9 8.90623 1088.04C8.90623 1057.54 5 1034.92 5 1005.19C5 981.208 6.95315 274.765 6.95315 251.9V180.701V32.5609C6.95315 20.4138 7.09203 5 20.6243 5Z"/>
				<path
					d="M7.04688 149.695C21.7599 149.695 241.636 149.695 256.047 149.695C285.009 149.695 316.657 149.695 345.547 149.695C463.462 149.695 578.508 147.399 696.369 147.399C726.818 147.399 757.764 145.517 788.161 147.399C802.561 148.29 1167.38 151.991 1182.55 151.991C1197.79 151.991 1401.65 158.186 1417.05 158.186"/>
				<path d="M292 9L291.5 150"/>
				<path d="M575 5V146"/>
				<path d="M858 5V144"/>
				<path d="M1137 5L1136.5 150"/>
			</svg>
		</Wrapper>

	);
}

export default KeyboardBorder;