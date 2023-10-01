import React, { JSX } from 'react';
import { DigitProps } from './DigitProvider';

function Digit6({ isBold }: DigitProps): JSX.Element {
	return (
		<svg viewBox="0 0 270 484" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M140.155 193.589C143.276 190.716 146.925 188.425 149.825 185.296C152.889 181.989 155.475 178.194 158.53 174.861C165.243 167.536 172.192 160.008 177.614 151.481C185.476 139.119 194.115 127.252 201.406 114.576C203.303 111.277 203.958 108.532 203.958 104.661C203.958 100.493 202.385 97.6999 201.122 93.8277C200.381 91.5558 199.511 89.2933 198.598 87.0954C197.743 85.0358 195.702 83.8785 194.26 82.3215C191.72 79.581 188.504 77.2347 185.469 75.1608C180.617 71.8443 176.655 68 170.553 68C165.94 68 162.946 70.2703 159.211 72.9575C153.594 76.9986 147.292 79.3481 141.97 83.9434C137.422 87.8694 133.836 91.4164 130.003 96.2758C125.069 102.532 120.685 109.011 116.562 115.922C110.25 126.502 100.672 133.993 94.2169 144.443C85.7706 158.115 79.5626 173.254 71.0494 186.887C67.3761 192.769 63.0156 198.237 59.7917 204.422C56.3973 210.934 53.6969 217.469 51.0862 224.405C49.1292 229.603 46.2005 234.519 44.5074 239.797C43.0798 244.248 42.3912 248.804 40.736 253.201C39.7958 255.698 39.8042 258.291 39.2898 260.882C38.5935 264.388 37.1749 267.759 36.5675 271.256C35.6177 276.722 35.0796 283.064 35.0079 288.637C34.8524 300.722 37.0496 312.425 37.0496 324.441C37.0496 331.317 38.296 337.296 40.6225 343.72C42.609 349.205 46.0662 353.592 48.2789 358.898C50.982 365.381 53.6309 371.457 57.4665 377.29C60.636 382.11 64.3588 386.422 67.5615 391.214C72.6496 398.826 78.9115 403.42 86.1636 408.289C90.7203 411.349 93.946 413.248 99.4346 413.798C102.452 414.1 105.295 414.596 108.254 415.297C111.323 416.024 114.37 415.864 117.441 416.399C121.788 417.155 126.561 416.74 130.967 416.674C135.817 416.601 141.506 415.635 146.252 414.471C151.14 413.272 156.157 412.995 161.082 411.961C165.434 411.048 169.06 409.207 173.219 407.861C180.799 405.407 188.616 403.449 195.791 399.721C203.965 395.474 212.596 390.93 220.263 385.552C221.942 384.375 223.112 382.39 224.375 380.748C226.043 378.578 228.222 376.993 229.876 374.811C232.912 370.807 234.768 366.267 237.135 361.867C239.173 358.079 240.961 353.661 243.26 350.116C245.203 347.12 246.814 344.937 247.854 341.333C250.261 332.993 252.782 324.369 252.958 315.444C253.145 305.983 255 296.743 255 287.23C255 276.229 252.043 264.894 247.372 255.128C245.71 251.654 243.455 248.136 241.474 244.846C239.394 241.393 237.606 236.83 235.094 233.799C229.713 227.31 223.793 221.514 217.229 216.295C210.872 211.24 204.539 205.759 196.982 203.228C188.459 200.374 179.552 197.798 170.865 195.578C164.053 193.837 156.328 194.9 149.343 194.69C146.742 194.612 144.136 194.14 141.459 194.14C139.893 194.14 138.66 194.53 137.206 195.119C135.648 195.749 140.533 195.241 142.197 195.241"/>
			<path
				d="M124.333 260.791C119.982 260.971 115.96 266.987 113.5 270.399C111.187 273.609 109.63 278.752 109.53 282.824C109.399 288.197 107.999 293.384 107.999 298.798C107.999 304.935 109.438 310.768 109.53 316.853C109.742 330.79 120.359 338.68 130.344 344.945C133.639 347.012 139.419 347.305 143.105 346.597C145.802 346.08 148.433 346.227 150.903 344.761C153.104 343.455 155.783 342.891 157.794 341.334C159.94 339.671 162.612 338.514 164.628 336.774C166.617 335.057 168.455 332.705 170.271 330.746C173.631 327.12 175.573 322.894 176.509 317.954C177.479 312.837 178.271 307.735 178.437 302.531C178.619 296.836 179.221 289.996 178.04 284.476C176.858 278.946 174.832 273.232 171.065 269.053C169.032 266.798 167.142 264.047 164.713 262.259C162.545 260.665 159.924 259.532 157.623 258.159C152.331 254.999 146.357 254.181 140.382 254.181C136.938 254.181 133.616 254.183 130.231 255.038C122.539 256.98 119.272 264.856 117.187 272.358"/>
			{isBold && <path
				d="M194.26 99.3972C190.787 106.892 189.999 115.096 188.135 123.144C187.717 124.948 187.636 124.158 187.624 122.593C187.584 116.943 187.624 111.29 187.624 105.64C187.624 103.471 189.011 83.6598 186.122 83.2701C184.939 83.1106 181.027 116.482 180.479 119.411C179.367 125.341 178.013 131.21 176.509 137.037C175.96 139.163 175.166 145.354 174.467 143.28C173.59 140.678 174.025 136.453 173.956 133.793C173.667 122.603 173.701 111.354 173.9 100.162C174.012 93.8404 174.498 87.6287 175.318 81.3728C175.484 80.1005 175.95 73.8561 175.374 78.8941C174.612 85.5654 174.201 92.2836 173.56 98.9687C172.364 111.435 169.964 123.684 167.576 135.935C166.221 142.89 164.882 149.854 163.153 156.714C162.692 158.543 161.887 165.126 160.118 166.292C159.573 166.652 159.432 165.079 159.353 164.395C159.11 162.303 159.094 159.591 159.069 157.571C158.906 144.47 158.608 131.403 158.133 118.309C157.672 105.576 158.175 67.367 157.481 80.0876C156.467 98.6883 155.753 116.989 152.916 135.446C150.49 151.228 147.211 167.207 143.445 182.695C142.461 186.74 142.248 182.077 142.083 180.675C140.724 169.099 139.702 157.481 139.248 145.82C138.601 129.208 138.39 111.218 142.594 94.9905C142.666 94.7113 143.057 94.0319 143.104 94.3173C143.22 95.0141 143.218 98.3749 143.218 98.5403C143.168 110.498 141.86 122.253 140.013 134.038C136.885 154.002 132.371 173.658 128.529 193.466C127.679 197.851 127.731 194.116 127.621 192.15C127.053 181.977 126.635 171.767 126.374 161.58C125.875 142.123 125.951 122.098 129.323 102.886C131.842 88.5291 125.861 131.878 123.566 146.279C119.654 170.84 113.889 194.989 109.7 219.478C109.14 222.749 109.53 217.572 109.53 217.55C109.53 208.36 109.467 199.167 109.53 189.978C109.625 175.996 110.14 162.007 111.685 148.115C112.151 143.926 112.939 138.416 113.897 134.161C114.128 133.132 114.423 132.118 114.776 131.131C115.045 130.378 115.582 128.96 115.74 130.703C116.236 136.167 114.385 142.537 113.528 147.839C111.063 163.1 108.519 178.347 105.957 193.589C103.64 207.37 101.171 221.115 98.5841 234.84C98.022 237.822 96.6422 246.682 96.3723 243.653C95.8771 238.095 96.245 232.335 96.1454 226.761C95.8894 212.43 95.5231 198.094 96.1454 183.766C96.5975 173.357 97.6641 163.039 99.4348 152.797C100.992 143.792 99.3017 156.892 99.0945 158.213C94.6169 186.782 89.0484 214.98 85.5967 243.745C84.8356 250.087 84.8303 257.913 82.8177 264.034C81.7897 267.16 82.4774 257.405 82.4774 254.088C82.4774 232.211 81.7065 210.177 82.7043 188.325C82.8415 185.32 83.3708 176.434 83.8953 179.39C84.9399 185.277 82.9561 192.876 82.1939 198.607C78.8066 224.077 76.5558 249.859 72.269 275.172C70.8291 283.675 70.7566 273.681 70.7377 271.868C70.664 264.791 70.7258 257.706 70.7377 250.63C70.758 238.61 70.8514 226.594 71.2481 214.581C71.4607 208.144 71.3295 201.357 72.2406 194.966C74.1772 181.382 68.6686 222.183 67.0797 235.819C65.2153 251.819 63.4441 267.83 61.38 283.802C60.3441 291.818 60.1432 293.03 59.1114 300.511C58.9526 301.662 58.6834 309.978 57.5802 311.466C56.7295 312.613 57.4715 308.529 57.4667 307.059C57.4537 303.02 57.475 298.98 57.4667 294.941C57.4457 284.656 57.1766 274.379 57.0697 264.095C56.9672 254.23 57.1345 244.37 57.8637 234.534C57.9836 232.917 58.0277 231.277 58.3741 229.699C58.6991 228.218 58.3086 232.743 58.1756 234.258C56.1977 256.789 52.3857 279.022 51.0581 301.673C50.5408 310.499 50.2797 319.34 49.9238 328.174C49.6922 333.923 49.8104 325.885 49.8104 324.992C49.8104 309.263 48.6442 293.44 49.8955 277.743C50.119 274.938 50.4316 271.503 51.1432 268.716C51.3847 267.769 52.1616 265.709 52.8162 266.39C53.7896 267.403 53.9822 271.283 54.0356 271.929C54.5357 277.991 54.4042 284.151 54.4042 290.228C54.4042 300.708 53.9841 311.211 54.3475 321.687C54.519 326.632 54.9323 333.022 55.6519 337.967C56.1357 341.292 56.7771 346.373 59.2249 348.953C62.179 352.067 63.1091 343.632 63.2799 342.588C64.8178 333.183 65.1742 323.605 66.8812 314.22C68.139 307.305 69.7883 300.008 72.8361 293.717C75.0179 289.214 75.8964 292.614 76.1255 295.737C77.7561 317.965 73.6274 340.459 73.8853 362.723C73.9047 364.396 73.3988 372.113 75.6434 373.189C77.9621 374.301 79.3851 363.552 79.5283 362.632C80.875 353.975 81.2514 345.205 82.1939 336.498C82.8705 330.247 83.311 318.456 88.2339 313.792C90.7938 311.366 90.706 320.796 90.786 324.472C91.007 334.632 90.2365 344.725 89.3398 354.828C88.33 366.205 87.349 377.542 87.1847 388.98C87.1207 393.43 87.1219 406.335 88.7159 402.23C90.4777 397.693 90.9161 392.336 91.665 387.541C93.5451 375.506 95.825 363.575 98.4707 351.707C99.7057 346.167 100.735 339.713 103.802 334.907C106.636 330.465 106.318 340.474 106.354 341.578C106.875 357.508 106.395 373.502 106.467 389.439C106.473 390.625 105.555 400.346 107.602 401.373C109.295 402.223 111.154 392.124 111.288 391.458C113.97 378.144 114.453 364.428 116.959 351.064C117.163 349.976 117.74 347.104 118.094 345.801C118.224 345.319 118.286 344.268 118.717 344.454C120.527 345.235 120.388 357.394 120.504 358.929C121.391 370.707 121.669 383.347 124.616 394.794C124.687 395.072 125.966 400.294 127.366 398.405C129.493 395.536 128.898 389.378 128.926 386.011C128.968 380.899 128.771 375.757 129.039 370.649C129.182 367.936 129.622 359.391 133.151 358.531C135.926 357.855 137.905 386.125 138.113 388.765C138.406 392.461 138.654 396.208 139.645 399.782C139.654 399.816 140.875 403.987 141.573 402.597C142.869 400.016 142.187 395.231 142.197 392.499C142.223 384.805 141.422 376.428 143.388 368.936C144.111 366.179 145.869 362.34 148.52 361.132C151.595 359.731 152.271 365.103 152.519 367.038C153.76 376.75 152.002 387.605 154.731 397.028C159.737 414.317 152.776 357.146 163.918 343.598C165.802 341.307 166.019 345.963 166.073 346.78C166.433 352.186 166.473 357.646 166.697 363.06C167.008 370.583 167.129 378.147 167.831 385.644C167.873 386.089 169.343 394.842 169.731 394.213C171.012 392.139 170.27 387.307 170.27 385.063C170.27 378.912 170.27 372.761 170.27 366.61C170.27 357.644 170.461 348.775 171.972 339.925C172.85 334.777 175.851 320.755 177.813 325.543C179.737 330.238 178.935 337.314 178.947 342.251C178.973 352.466 178.572 362.671 178.465 372.883C178.411 378.072 178.135 383.502 178.976 388.643C179.814 393.769 179.965 385.974 179.968 385.216C180.046 367.181 179.146 348.899 180.819 330.928C181.466 323.978 182.538 316.569 185.469 310.242C188.954 302.72 189.055 315.176 189.099 317.188C189.586 339.667 187.566 362.12 187.624 384.604C187.632 387.549 187.627 396.036 188.759 393.356C191.362 387.188 190.683 378.332 190.971 371.782C192.054 347.125 192.311 321.923 199.648 298.277C200.566 295.315 203.335 283.837 207.588 283.404C211.792 282.976 209.003 301.31 208.835 302.959C207.456 316.503 205.862 330.003 204.922 343.598C204.222 353.727 202.899 365.048 204.298 375.209C204.922 379.736 206.374 373.274 206.482 372.669C208.139 363.368 208.09 353.743 208.779 344.332C209.786 330.558 211.523 316.811 214.053 303.265C215.65 294.712 217.637 286.08 221.142 278.171C221.919 276.419 223.122 274.267 223.241 277.559C223.655 289.032 221.538 300.835 220.603 312.231C219.552 325.047 218.874 337.888 218.874 350.758C218.874 355.662 217.746 365.498 220.348 370.221C221.719 372.709 223.375 367.801 223.553 367.161C226.392 356.946 225.752 345.239 226.643 334.723C228.163 316.812 231.728 299.216 233.449 281.354C233.471 281.123 233.563 278.052 233.563 280.375C233.563 288.494 233.563 296.614 233.563 304.734C233.563 312.374 233.453 320.039 234.13 327.654C234.176 328.18 235.685 338.845 236.115 336.498C236.844 332.518 236.608 328.224 236.738 324.196C237.068 314.061 237.698 303.939 238.128 293.809C238.548 283.902 238.667 254.147 238.667 264.064C238.667 275.338 240.193 286.451 240.595 297.695C240.698 300.57 240.974 309.187 240.708 306.325C240.339 302.339 239.93 298.394 239.404 294.421C236.892 275.442 234.321 256.573 230.443 237.839C229.864 235.042 228.25 227.515 227.04 230.066C225.056 234.251 225.552 240.97 225.282 245.428C224.759 254.095 224.337 262.769 223.864 271.439C223.566 276.911 223.91 283.908 222.05 289.127C221.396 290.962 220.299 285.572 220.093 283.618C219.204 275.202 218.854 266.71 218.023 258.28C217.015 248.055 215.997 237.819 214.79 227.618C214.762 227.379 212.727 213.155 211.302 217.091C209.019 223.399 208.327 230.958 207.361 237.594C205.937 247.375 205.047 257.239 203.93 267.063C202.928 275.872 201.91 284.736 200.13 293.411C199.997 294.058 197.805 304.884 195.224 300.327C192.881 296.189 193.328 288.522 193.069 283.986C192.541 274.762 192.71 265.494 192.842 256.261C193.001 245.222 193.228 234.176 193.75 223.15C193.778 222.558 195.367 211.88 192.927 216.693C190.985 220.523 190.187 224.817 189.383 229.056C187.617 238.363 186.67 247.754 185.895 257.209C185.182 265.9 184.576 274.597 183.796 283.282C183.572 285.776 183.121 290.8 182.832 293.533C182.698 294.804 182.625 298.36 182.01 297.267C180.97 295.419 181.45 291.21 181.386 289.31C181.056 279.558 180.639 269.814 180.479 260.055C180.319 250.361 180.315 240.628 179.656 230.953C179.343 226.348 178.973 220.1 176.395 216.111C175.158 214.197 174.172 220.277 173.956 222.599C173.344 229.211 173.209 235.868 172.709 242.49C172.256 248.48 171.641 254.467 170.894 260.423C170.574 262.972 170.44 265.358 169.958 261.432C168.067 246.012 165.968 230.59 164.372 215.132C163.972 211.26 164.032 207.076 163.238 203.259C162.762 200.973 161.953 207.747 161.565 210.052C159.457 222.562 158.475 235.161 155.043 247.386C154.775 248.34 154.16 252.408 152.377 252.038C149.817 251.506 149.963 244.977 149.74 243.102C148.057 228.999 147.297 213.314 142.764 199.862C142.319 198.541 141.425 195.942 140.666 198.577C139.063 204.137 138.916 210.496 138.227 216.234C137.437 222.815 136.768 229.409 136.072 236.002C135.751 239.04 136 244.231 134.427 247.019C133.577 248.527 132.647 245.907 132.499 245.428C131.165 241.109 130.995 236.281 130.741 231.779C130.408 225.882 130.363 219.965 130.202 214.061C130.103 210.438 130.034 208.465 129.975 204.973C129.951 203.562 130.548 199.658 129.72 200.75C128.449 202.426 128.206 206.411 127.792 208.4C126.256 215.765 125.137 223.216 123.765 230.617C122.581 237.005 121.316 243.391 119.852 249.712C119.555 250.991 118.856 254.412 118.746 250.783C118.406 239.601 118.527 228.268 118.831 217.091C118.896 214.68 119.399 207.464 119.228 209.869C118.846 215.224 117.35 220.596 116.392 225.843C113.53 241.523 111.546 257.297 109.757 273.153C108.888 280.849 107.997 273.001 107.602 269.603C107.084 265.158 106.769 260.674 106.581 256.2C106.49 254.049 106.997 247.685 106.411 249.743C103.312 260.611 102.293 272.091 100.456 283.251C99.3783 289.796 98.3354 296.347 96.9961 302.836C96.9461 303.079 95.8989 309.52 95.3798 308.314C92.1064 300.705 90.4898 291.679 89.7084 283.404C89.1552 277.547 88.9015 271.501 89.3965 265.625C89.7385 261.565 90.1438 265.142 90.1338 266.604C90.1011 271.357 89.564 276.051 88.8861 280.742C87.9918 286.93 87.6386 294.879 84.8027 300.511C83.3211 303.453 83.0863 298.076 83.0729 297.512C82.9886 293.962 83.5671 291.068 84.5191 287.78"/>
			}
		</svg>
	);
}

export default Digit6;