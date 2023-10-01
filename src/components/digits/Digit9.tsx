import React, { JSX } from 'react';
import { DigitProps } from './DigitProvider';

function Digit9({ isBold }: DigitProps): JSX.Element {
	return (
		<svg viewBox="0 0 273 484" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M142.639 286.718C140.628 286.805 138.887 287.969 136.937 288.478C134.384 289.145 131.839 289.065 129.234 289.065C124.28 289.065 119.77 288.544 114.92 287.435C105.084 285.186 95.7741 283.441 86.7157 278.505C81.9611 275.915 76.9281 273.742 73.0686 269.706C69.3133 265.779 66.0384 261.449 62.3934 257.387C58.2877 252.811 54.6332 247.15 53.1134 240.961C51.51 234.432 48.5363 228.712 46.0168 222.58C43.7083 216.962 40.7682 211.568 40.558 205.242C40.3785 199.841 39.92 194.52 40.0121 189.077C40.1218 182.592 42.2296 175.959 42.8628 169.457C43.5918 161.971 44.827 154.952 46.5627 147.687C50.0919 132.916 58.5353 120.155 68.5195 109.425C73.9424 103.598 79.0384 98.0861 85.6846 93.9121C91.9361 89.9859 97.1035 84.1793 103.214 80.0937C114.255 72.7106 126.15 70.8379 138.999 70.8379C148.876 70.8379 159.794 68.6075 169.508 71.4246C175.872 73.2699 182.101 75.527 188.493 77.2909C192.909 78.5094 197.853 80.5284 201.716 83.1572C205.214 85.5378 206.984 88.4233 209.358 91.9567C211.964 95.8342 215.045 98.6875 218.638 101.473C226.339 107.443 232.073 115.641 238.593 122.918C244.042 128.998 245.017 138.577 246.236 146.579C247.966 157.941 248.346 169.434 249.511 180.864C250.895 194.43 249.184 206.548 246.357 219.712C241.057 244.393 231.977 268.48 218.76 289.391C216.027 293.714 214.169 298.653 211.117 302.753C208.264 306.585 206.129 310.187 204.324 314.746C200.808 323.626 194.381 330.997 190.555 339.645C189.425 342.2 187.15 343.8 185.642 346.098C184.014 348.58 182.692 351.172 180.972 353.594C178.687 356.812 175.73 359.097 173.087 361.937C167.098 368.374 160.255 373.784 153.678 379.406C144.207 387.502 135.047 396.317 126.262 405.218C122.934 408.59 115.558 412.844 110.856 412.844C105.893 412.844 99.11 414.152 95.6925 409.194C91.3967 402.962 88.5182 396.512 85.3207 389.639C82.4514 383.473 77.0384 373.422 80.529 366.37C84.5618 358.222 90.5031 351.394 94.8433 343.491C97.4839 338.683 101.555 334.788 104.305 329.999C107.133 325.074 110.016 322.636 114.131 318.983C119.92 313.844 125.215 306.475 131.721 302.427C133.381 301.394 136.609 297.854 137.604 296.104C138.84 293.932 140.536 290.195 142.639 289.065"/>
			<path
				d="M130.084 142.408C126.346 146.425 121.123 148.89 117.528 152.967C114.356 156.565 114.195 162.519 112.888 167.013C110.663 174.665 112.897 182.726 113.161 190.381C113.284 193.931 115.314 198.078 116.861 201.071C118.809 204.839 119.355 209.039 121.107 212.803C123.206 217.316 127.244 220.557 131.843 221.733C136.141 222.833 139.957 226.882 144.58 226.882C154.573 226.882 161.601 217.427 169.266 211.63C174.068 207.999 176.074 202.23 178.789 197.095C180.225 194.379 181.605 190.87 182.367 187.839C183.247 184.343 184.672 180.016 184.672 176.432C184.672 169.291 182.715 163.479 178.364 157.953C173.683 152.008 167.159 150.159 161.078 146.384C156.13 143.312 150.347 141.234 144.58 141.234C140.159 141.234 127.354 138.613 127.354 145.927"/>
			{isBold && <>
				<path
					d="M89.1421 97.2357C89.5613 102.191 88.7208 106.902 88.0806 111.804C88.0287 112.201 86.3682 122.938 87.5651 122.754C89.6556 122.433 90.6017 113.245 91.0527 111.478C92.1869 107.033 93.6373 101.902 96.1779 98.1482C97.2067 96.6282 98.823 95.0814 98.9377 97.8549C99.2541 105.504 97.7959 113.26 96.8148 120.799C96.687 121.78 95.0026 138.193 95.8443 137.876C97.3492 137.31 98.514 131.755 98.8467 130.674C100.14 126.471 101.278 122.205 102.456 117.963C104.818 109.456 107.814 101.442 112.221 93.8789C112.936 92.6511 118.844 82.877 119.014 89.1858C119.236 97.4181 116.07 105.813 114.283 113.694C112.315 122.379 109.99 131.429 109.461 140.386C109.129 146.002 112.742 136.584 112.979 135.986C116.309 127.581 119.22 118.898 122.896 110.663C125.73 104.315 129.423 96.2097 135.087 92.1516C137.243 90.607 135.528 97.8997 135.451 98.409C133.255 113.015 127.52 127.019 126.384 141.82C126.124 145.203 130.03 134.955 130.144 134.65C133.724 125.071 137.501 115.53 141.547 106.166C144.418 99.5198 147.959 90.445 153.314 85.5683C155.397 83.6708 152.594 96.5867 152.465 97.1053C150.197 106.209 147.794 115.278 146.157 124.547C146.113 124.793 144.422 136.493 145.914 133.998C149.166 128.563 150.429 120.925 152.344 114.9C154.917 106.8 157.865 98.7215 162.412 91.6301C163.449 90.0138 170.857 79.6572 172.056 86.546C173.459 94.6037 167.919 104.237 165.445 111.445C163.62 116.762 161.963 122.16 160.623 127.643C160.399 128.559 159.149 132.382 159.804 133.672C160.108 134.271 165.45 121.844 165.809 120.897C169.004 112.461 172.413 103.888 177.09 96.258C177.582 95.4561 186.663 81.6349 188.251 85.0468C190.358 89.5757 186.893 98.0072 185.612 102.189C182.238 113.206 178.28 123.978 175.301 135.139C175.086 135.946 172.651 145.753 175.271 139.832C178.669 132.151 181.022 123.983 184.46 116.301C187.241 110.086 190.729 101.077 196.318 97.0728C201.75 93.1811 199.789 105.468 199.411 107.241C196.639 120.241 192.24 132.922 188.342 145.568C186.994 149.937 183.278 163.145 184.278 158.669C185.781 151.941 188.817 145.362 191.556 139.147C195.364 130.509 199.626 122.35 206.144 115.715C208.464 113.352 215.709 106.645 215.424 114.704C214.993 126.856 208.756 139.229 204.627 150.293C201.718 158.091 194.449 181.869 195.62 173.563C196.088 170.243 197.765 166.762 198.926 163.721C201.13 157.946 203.309 152.142 205.689 146.448C209.144 138.18 213.826 127.353 221.368 122.428C228.553 117.737 226.678 129.978 225.826 133.444C222.599 146.573 217.621 159.184 213.18 171.868C210.809 178.639 208.558 185.444 206.508 192.335C205.861 194.508 204.567 201.135 204.567 198.853C204.567 197.147 206.019 194.132 206.508 192.791C208.537 187.223 210.645 181.677 212.816 176.17C216.671 166.389 220.793 155.408 227.919 147.751C233.22 142.054 231.903 155.18 231.679 157.463C230.535 169.141 227.837 180.583 225.432 192.009C223.343 201.931 221.365 211.966 218.093 221.536C215.481 229.173 217.489 219.789 218.214 217.43C220.167 211.077 223.542 197.641 230.163 194.942C235.72 192.677 233.282 210.98 232.892 212.932C230.561 224.598 226.135 236.104 222.338 247.283C220.221 253.515 217.999 259.717 215.06 265.566C214.082 267.513 211.999 272.455 209.358 273.03C205.061 273.964 206.5 260.439 206.508 259.016C206.58 245.78 207.925 232.737 211.542 220.037C212.716 215.914 214.065 211.28 216.394 207.685C218.124 205.017 217.591 208.326 217.365 209.282C214.449 221.591 209.337 233.589 205.355 245.523C201.86 255.997 198.795 266.912 193.801 276.712C193.472 277.358 191.087 282.784 189.282 282.416C187.939 282.142 187.775 277.885 187.705 277.234C186.44 265.491 186.918 253.557 187.766 241.808C188.5 231.626 188.624 219.619 191.951 209.869C194.139 203.456 189.545 223.318 187.584 229.814C183.28 244.067 178.464 258.345 173.118 272.182C172.698 273.269 167.143 288.494 164.08 283.556C162.594 281.161 162.856 277.272 162.837 274.594C162.801 269.594 163.043 264.579 163.474 259.602C164.481 247.961 166.17 236.284 168.174 224.795C169.417 217.673 166.862 226.226 166.203 227.989C159.946 244.725 154.021 261.873 147.127 278.309C144.651 284.214 144.886 274.732 144.853 272.899C144.701 264.566 144.646 256.158 145.126 247.837C145.299 244.823 145.583 241.82 145.793 238.809C145.827 238.321 145.854 237.832 145.884 237.343C145.942 236.406 145.915 236.995 145.823 237.604C144.849 244.058 142.313 250.237 140.243 256.343C138.424 261.707 136.662 267.073 134.269 272.182C133.912 272.943 131.404 278.751 130.629 275.246C127.63 261.675 128.826 246.47 129.416 232.682C129.753 224.808 128.238 236.01 127.779 237.897C125.668 246.559 122.854 255.055 120.136 263.513C118.89 267.393 117.662 275.468 114.374 278.244C112.894 279.494 112.241 272.87 112.191 272.508C111.106 264.766 111.454 256.713 111.523 248.913C111.602 240.031 112.544 231.695 114.859 223.166C118.485 209.808 108.764 250.247 104.669 263.448C103.579 266.963 102.492 270.616 101 273.975C100.728 274.586 100.243 275.937 99.7565 275.506C98.1622 274.096 99.5139 262.67 99.5139 260.971C99.5139 247.198 99.5212 233.62 101.515 219.972C102.54 212.957 103.773 205.934 105.397 199.049C105.82 197.256 106.377 194.041 107.46 192.335C109.728 188.76 105.38 200.698 104.245 204.85C100.262 219.421 95.9885 233.875 92.2354 248.521C90.9521 253.53 89.8067 258.64 88.2929 263.578C88.0639 264.325 87.1956 267.446 86.7462 264.817C85.5064 257.563 86.8646 249.216 87.6257 242.003C89.4051 225.141 91.5388 208.253 94.3583 191.553C95.9253 182.271 96.8822 170.908 100.697 162.254C104.229 154.241 96.6251 179.442 94.3583 187.968C89.0133 208.072 84.4443 228.475 78.6186 248.424C78.1034 250.188 74.4031 264.78 74.4031 255.268C74.4031 245.351 74.2612 235.416 74.8277 225.512C75.8809 207.101 78.4809 188.909 83.3799 171.216C84.9238 165.641 86.6423 160.133 88.4749 154.66C89.2337 152.394 89.9323 149.052 91.1436 146.936C92.0653 145.327 90.6029 150.677 90.1732 152.509C88.6955 158.811 86.9421 165.045 85.3512 171.314C80.1584 191.775 75.3215 212.336 70.1877 232.813C69.8905 233.998 68.6435 241.855 67.0033 243.046C66.7965 243.196 66.6533 242.626 66.6091 242.362C66.2964 240.495 66.5498 236.512 66.6394 235.094C67.5375 220.881 70.3635 206.742 72.6138 192.726C75.2754 176.149 77.5646 159.422 80.9538 142.993C81.8944 138.433 82.962 133.818 84.6537 129.5C84.8092 129.103 86.3091 125.417 85.9274 128.653C84.1571 143.661 79.1095 158.765 75.2523 173.237C72.7167 182.75 69.9414 192.18 67.0033 201.558C64.78 208.655 62.7462 216.293 59.4822 222.97C55.7095 230.689 57.0197 214.624 57.1774 213.193C58.7821 198.631 61.9325 184.221 64.2739 169.782C66.6428 155.174 68.3849 139.933 74.1605 126.307C75.9667 122.045 77.6227 119.032 75.9801 125.981C72.5279 140.585 68.191 155.008 63.4854 169.196C61.258 175.912 58.8739 182.576 56.3585 189.174C55.4793 191.48 55.535 195.536 53.2349 195.855C51.8267 196.05 53.3953 179.995 53.4775 179.299C55.0639 165.854 57.1945 152.817 61.3625 139.995C61.9565 138.167 66.3739 129.227 65.0018 126.958C64.4854 126.105 58.5636 139.333 58.3905 139.864C56.5626 145.471 41.5108 189.245 50.93 190.51"/>
				<path
					d="M86.4121 377.646C86.7585 371.287 87.1419 364.979 88.0498 358.678C88.2115 357.556 89.2289 348.073 90.5063 354.865C92.7916 367.015 92.0972 380.248 91.7497 392.572C91.7018 394.271 91.3857 399.356 91.3857 397.656C91.3857 393.072 91.9702 388.439 92.5078 383.903C94.1136 370.357 95.4905 356.075 100.059 343.23C100.722 341.367 102.023 336.718 103.183 338.276C105.243 341.043 103.701 349.898 103.517 352.942C102.544 369.005 99.7928 384.886 99.0888 400.98C99.0484 401.903 99.0282 402.827 99.0282 403.751C99.0282 405.581 99.1583 404.603 99.3011 403.392C100.034 397.175 100.515 390.915 101.151 384.685C102.968 366.899 105.424 348.225 113.221 332.149C114.397 329.726 117.203 323.569 120.257 322.698C121.673 322.294 121.767 325.57 121.773 325.696C121.916 328.41 121.399 334.607 121.167 336.842C119.086 356.886 114.892 376.62 111.432 396.418C110.951 399.171 110.671 402.923 109.885 405.739C109.236 408.065 110.645 400.949 111.098 398.569C114.033 383.158 116.888 367.755 120.682 352.551C123.006 343.234 125.508 333.937 128.87 324.979C130.262 321.27 132.985 311.861 136.816 309.727C138.988 308.516 138.631 314.757 138.575 317.385C138.352 327.794 136.142 338.036 134.329 348.216C131.144 366.098 129.036 384.497 124.867 402.154C122.039 414.131 129.002 377.822 131.842 365.848C136.877 344.623 142.014 322.842 150.341 302.785C151.514 299.961 153.547 294.429 156.468 292.714C159.537 290.912 158.748 300.054 158.408 303.795C156.466 325.202 151.535 346.376 147.127 367.314C146.138 372.009 145.237 376.769 144.094 381.426C143.59 383.479 144.639 374.849 144.64 374.843C147.56 356.364 152.078 337.822 157.681 320.09C160.064 312.548 162.927 305.223 166.415 298.19C167.71 295.579 172.173 284.697 176.059 284.697C180.354 284.697 170.855 320.934 170.418 322.6C167.08 335.327 155.908 373.095 160.349 360.764C169.752 334.661 175.884 306.727 192.526 284.371C196.089 279.586 192.455 297.306 192.314 298.059C190.278 308.902 186.915 319.864 185.703 330.845C184.836 338.695 191.064 316.124 193.709 308.749C197.482 298.231 200.886 287.409 205.81 277.429C209.414 270.123 208.179 278.677 208.145 282.416C208.074 290.103 207.26 297.709 204.869 304.903"/>
				<path
					d="M204.324 209.282C199.502 221.496 197.259 234.772 193.467 247.381C192.847 249.442 191.921 255.498 191.283 253.443C190.758 251.75 191.223 249.202 191.223 247.413"/>
				<path
					d="M194.498 174.672C190.184 182.582 187.432 190.823 184.43 199.376C179.771 212.648 175.071 225.901 170.479 239.201"/>
				<path
					d="M237.077 153.552C236.808 155.097 236.923 156.348 237.138 157.919C237.833 162.998 238.037 167.931 237.775 173.074C237.155 185.207 234.988 197.124 234.348 209.282"/>
				<path
					d="M153.557 77.2916C146.928 76.6721 142.325 77.1975 136.059 79.7033C132.645 81.0683 125.97 83.2817 124.747 87.7206C124.032 90.3121 136.463 81.3895 132.814 84.3312"/>
			</>}    </svg>

	);
}

export default Digit9;