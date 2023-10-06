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
    height: calc(${KEYBOARD_HEIGHT} * 0.16);
    width: 100%;
    display: flex;
    z-index: 2;
  }

  & > .keys {
    position: absolute;
    top: calc(${KEYBOARD_HEIGHT} * 0.17);
    width: 96%;
    height: calc(${KEYBOARD_HEIGHT} * 0.81);
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
			<svg className={'border'} preserveAspectRatio="none" viewBox="0 0 1428 1266" fill="none"
				 xmlns="http://www.w3.org/2000/svg">
				<path
					d="M20.6238 5H366.297H662.17H1128.93H1201.08C1250.14 5 1299.33 7.37879 1348.63 7.37879H1382.5C1389.81 7.37879 1405.59 11.3483 1411.5 17.103C1420.01 25.3903 1420 40.1564 1420 52.7386V53.3532C1425.2 81.8769 1413.19 412.214 1413.19 442.114C1413.19 460.152 1416.99 870.895 1416.99 888.72V969.598C1416.99 1022.73 1420.89 1073.45 1420.89 1126.73C1420.89 1153.52 1422.02 1180.74 1422.85 1206.82C1423.17 1216.99 1423.61 1241.04 1416.99 1249.11C1410.26 1257.3 1402.88 1261 1393.55 1261C1360.76 1261 1039.7 1252.46 1007.51 1258.49H815.517C762.742 1258.49 490.317 1253.86 437.58 1253.86C373.984 1253.86 311.635 1251.48 248.143 1251.48H47.5454C31.4347 1251.48 10.1271 1243.5 10.1271 1220.56C10.1271 1191.9 8.9061 1155.58 8.9061 1126.73C8.9061 1095.13 5 1071.71 5 1040.91C5 1016.08 6.95308 284.402 6.95308 260.72V186.977V33.5455C6.95308 20.9644 7.09196 5 20.6238 5Z"/>
				<path
					d="M7.04688 192.695C21.7599 192.695 241.636 192.695 256.047 192.695C285.009 192.695 316.657 192.695 345.547 192.695C463.462 192.695 578.508 190.399 696.369 190.399C726.818 190.399 757.764 188.517 788.161 190.399C802.561 191.29 1167.38 194.991 1182.55 194.991C1197.79 194.991 1401.65 201.186 1417.05 201.186"/>
				<path d="M289 5L291.5 193"/>
				<path d="M574 5L575 189"/>
				<path d="M858 7.5V187"/>
				<path d="M1136.5 6L1136.5 193"/>
			</svg>
		</Wrapper>
	);
}

export default KeyboardBorder;