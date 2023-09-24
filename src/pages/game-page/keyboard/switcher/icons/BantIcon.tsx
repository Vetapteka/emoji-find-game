import React from 'react';
import { IconProps, ICON_STROKE_WIDTH, IconContainer, ICON_DEFAULT_COLOR } from '../iconUtils';

function BantIcon({ onClick, color }: IconProps) {
	return (
		<IconContainer isActive={color !== ICON_DEFAULT_COLOR}>
			<svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" stroke={color} stroke-width={ICON_STROKE_WIDTH}
				 viewBox="0 0 140 88" fill="none">
				<path
					d="M6 47.3609C6.26298 44.994 7.07046 38.5831 7.07046 36.1821C7.07046 33.7179 7.75838 31.2232 7.75838 28.7678C7.75838 23.7831 8.96652 18.9413 9.45909 14.0156C9.69649 11.6416 10.9354 7.08008 13.7777 6.44846C23.8667 4.20645 34.9577 7.13882 42.919 13.6526C47.8216 17.6638 52.053 22.672 56.5246 27.1435C58.7908 29.4097 61.2902 32.0872 63.1363 34.7107C63.8153 35.6755 64.9953 36.5935 64.7797 37.8064C63.8345 43.1229 64.1682 48.6594 64.1682 54.049C64.1682 57.9522 63.2355 63.1204 68.4677 63.508C74.525 63.9567 82.2665 63.2103 86.3538 58.2148C88.5041 55.5866 88.2456 51.9828 88.2456 48.7176C88.2456 45.5253 89.9033 38.0219 85.4939 37.042C82.9329 36.4729 80.7709 35.2297 78.0987 34.9973C75.9016 34.8063 73.6028 34.2903 71.4105 34.2903C70.2663 34.2903 70.615 36.2276 70.8755 37.0611C71.8257 40.1018 71.7069 44.2407 71.2194 47.3609C70.7792 50.1783 70.0156 52.7425 70.0156 55.616C70.0156 57.7165 70.2779 57.9312 72.4424 57.6606C73.7114 57.502 76.552 56.0817 77.5063 55.1956C78.8066 53.9881 80.4121 53.0223 80.9459 51.2209C81.5427 49.2068 81.3663 47.0455 81.3663 44.9531C81.3663 43.2008 80.7098 42.7514 78.9586 42.5454C77.9691 42.429 79.8534 42.1979 80.0096 42.1823C81.1544 42.0678 82.8465 41.3993 83.8505 40.8256C85.0421 40.1447 86.1407 39.5133 87.2901 38.7618C92.2442 35.5226 96.8303 30.6774 100.896 26.4556C106.421 20.7179 112.819 15.9086 118.495 10.232C120.943 7.78384 124.77 5.39746 128.298 5.39746C131.642 5.39746 133.635 7.8845 133.973 11.2639C134.657 18.0988 134.337 25.0793 134.337 31.959C134.337 39.0802 134.044 46.5783 133.037 53.6286C132.091 60.2513 131.268 66.9164 129.789 73.4256C129.181 76.098 128.34 81.4935 124.782 81.7571C121.351 82.0112 117.95 82.4886 114.463 82.445C110.385 82.394 106.655 80.6036 103.38 78.3175C99.1023 75.3312 97.5046 70.9991 95.2012 66.6227C94.2287 64.7749 93.0629 62.3253 91.6852 60.7754C90.9233 59.9183 90.4217 58.8711 89.6214 58.0237C89.2952 57.6783 88.1635 56.3039 88.2456 56.3039"
					stroke-linecap="round"/>
				<path
					d="M5.72382 46C5.72382 51.6141 4.30374 67.2758 5.72412 72.7544C6.3119 75.0216 7.16546 77.7103 8.9507 79.3333C11.631 81.7699 15.8315 82.0019 19.259 82.2875C29.8249 83.168 41.9511 76.7051 49.8276 70.1145C53.9769 66.6427 57.8403 62.8142 61.6654 58.9891C62.3549 58.2996 64.8465 56.2162 64.3472 55.2178"
					stroke-linecap="round"/>
			</svg>
		</IconContainer>

	);
}

export default BantIcon;