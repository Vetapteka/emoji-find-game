import React from 'react';
import { IconProps, ICON_STROKE_WIDTH, ICON_DEFAULT_COLOR, IconContainer } from '../iconUtils';

function AvocadoIcon({ onClick, color }: IconProps) {
	return (
		<IconContainer isActive={color !== ICON_DEFAULT_COLOR}>
			<svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" stroke={color}
				 stroke-width={ICON_STROKE_WIDTH}
				 viewBox="0 0 134 103" fill="none">
				<path
					d="M14.7758 86.7551C14.7036 86.0864 13.6695 84.8611 13.2161 84.3766C12.2559 83.3506 11.4109 82.163 10.9045 80.8233C9.6983 77.6321 8.05244 74.5729 7.00529 71.2809C5.67415 67.096 5 62.8899 5 58.5148C5 55.5433 5.12372 52.6132 5.25066 49.6744C5.3932 46.3747 6.89251 43.4775 7.50662 40.3183C8.12585 37.1327 9.90402 33.7643 11.4615 30.9908C14.1797 26.1504 18.7215 24.1213 23.535 21.8926C26.5681 20.4883 30.1519 20.4516 33.3248 19.4425C35.3676 18.7929 37.6154 18.6532 39.7027 18.153C42.2222 17.5493 44.9145 17.1214 47.5011 17.1214C51.1535 17.1214 86.137 12.83 89.7237 13.5681C93.7985 11.8684 97.6402 9.60431 101.602 7.67932C104.126 6.45293 107.71 5 110.584 5C113.142 5 115.89 6.7041 117.993 8.09483C120.51 9.75976 124.242 12.0033 125.554 14.9292C126.807 17.7219 127.517 20.7411 128.576 23.6263C129.659 26.5748 128.326 30.0225 128.326 32.9681C128.326 36.0306 126.161 39.2264 124.566 41.6221C122.496 44.7301 118.988 48.642 115.416 49.7604C112.551 50.6578 115.953 49.9645 113 50.4318C99.1712 57.3236 82.8297 76.8799 80.4 80.0047C75.3014 82.9661 66.8886 96.3691 47.5011 96.756C44.2036 97.6041 40.4775 97.5444 37.029 96.756C36.1203 96.5482 35.3619 95.9095 34.4528 95.667C33.5792 95.434 32.7284 95.3509 31.8765 95.0079C30.1996 94.3328 28.4729 93.7746 26.8076 93.0737C24.4339 92.0746 21.9595 91.0983 19.8447 89.592C18.72 88.7908 16.7242 87.3532 16.2798 85.9814"
					stroke-linecap="round"/>
				<path
					d="M37.3148 65.242C38.2078 66.8306 34.5245 62.843 33.4651 61.3602C32.1104 59.4639 31.6601 57.4261 31.4733 55.135C31.3485 53.6041 32.3705 52.4261 33.5107 51.5817C36.2275 49.5698 39.5633 47.5296 42.8256 46.6138C44.6313 46.1068 46.3306 45.2638 48.1509 44.8046C50.4591 44.2223 52.8562 43.9825 55.204 43.6102C58.13 43.1462 61.5124 43.5128 64.3959 44.1863C68.3752 45.1157 68.1915 48.96 66.1295 51.501C63.7261 54.4625 60.4303 56.8509 56.9876 58.4063C55.8319 58.9285 54.9671 59.8982 53.9168 60.5844C52.5134 61.5012 51.0839 62.3007 49.7068 63.2364C47.1473 64.9757 45.492 67.8271 42.1263 67.7958C40.6024 67.7816 39.3082 65.1596 38.3278 64.2365C36.9266 62.9174 36.1188 61.0727 37.1709 59.2707C37.6503 58.4497 38.3557 58.3042 39.1486 57.8437C41.1806 56.6638 43.254 55.9977 45.4541 55.1855C49.6698 53.6293 53.8081 53.6141 58.1953 53.6393C60.4402 53.6523 62.2856 52.5667 64.3135 51.8033C66.0168 51.1622 63.1914 50.3328 62.7086 50.2488C61.8962 50.1075 60.0431 50.836 59.3576 51.2839C57.9362 52.2125 56.7962 53.3992 55.3778 54.3258C53.3671 55.6394 51.4026 56.9359 49.1613 57.8344C47.049 58.6813 43.7224 59.3277 41.9861 60.8153C40.3187 62.2438 38.7006 65.5408 40.012 67.6791C41.4772 70.0684 46.3007 69.2657 48.4335 68.3164C53.0009 66.2835 56.0848 62.6649 58.7651 58.5712C60.5381 55.8633 62.564 53.3411 64.1882 50.5591"
					stroke-linecap="round"/>
			</svg>
		</IconContainer>
	);
}

export default AvocadoIcon;