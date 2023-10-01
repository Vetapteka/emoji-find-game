import React, { JSX } from 'react';
import { DigitProps } from './DigitProvider';

function Digit5({ isBold }: DigitProps): JSX.Element {
	return (
		<svg viewBox="0 0 262 484" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M80.7879 75.079C79.8306 76.9382 77.1787 78.3202 75.846 80.231C73.3592 83.7967 72.4676 89.2194 71.7571 93.5496C69.5559 106.965 68.9851 120.433 67.4423 133.917C66.508 142.082 65.3432 150.222 64.0808 158.334C62.1412 170.798 62.8622 183.785 60.2678 196.152C58.275 205.652 55.6108 215.333 56.9565 225.256C57.5562 229.678 59.0837 234.119 60.4434 238.328C61.5106 241.631 61.8622 246.383 63.7296 249.207C65.5137 251.906 68.3379 254.626 71.0547 256.059C73.0716 257.122 75.4766 257.028 77.6522 257.127C80.2866 257.247 82.687 257.933 85.2782 257.1C92.1635 254.888 98.6523 253.647 105.823 253.647C111.991 253.647 118.226 253.422 124.337 252.551C130.168 251.72 136.219 252.167 142.097 252.167C146.924 252.167 149.798 252.647 153.938 254.908C156.867 256.508 159.345 259.251 162.316 260.937C163.657 261.697 164.622 262.853 165.678 264.006C166.639 265.056 168.004 265.586 168.813 266.746C170.537 269.218 171.011 271.954 171.999 274.748C173.206 278.159 173.115 281.07 173.705 284.614C174.261 287.956 173.805 291.719 173.805 295.11C173.805 298.764 173.662 302.224 173.003 305.825C172.051 311.023 169.972 315.884 166.832 319.939C166.038 320.963 165.644 321.925 165.226 323.2C164.699 324.807 163.525 326.055 163.069 327.639C162.397 329.974 159.775 332.459 157.901 333.668C153.349 336.607 149.139 339.858 144.48 342.657C140.571 345.006 136.46 344.904 132.038 344.904C125.674 344.904 118.46 345.674 112.396 343.424C107.034 341.435 101.422 339.962 96.4915 336.902C91.4081 333.747 85.9592 331.048 80.813 327.886C76.7035 325.361 72.0841 323.601 67.4423 322.679C64.1803 322.031 58.7538 320.408 55.5016 321.829C51.8323 323.433 46.7414 323.07 43.5608 325.913C39.1764 329.832 36.5305 334.073 34.7306 339.971C32.4777 347.355 32.3692 355.824 34.7306 363.156C37.4581 371.624 43.0829 377.473 48.2769 384.093C55.9682 393.895 65.9997 404.477 77.6271 408.154C79.2761 408.675 80.5744 410.2 82.1425 410.949C84.0453 411.858 86.2845 412.201 88.2634 412.977C92.0605 414.466 96.6434 414.672 100.656 415.334C106.446 416.289 112.655 415.937 118.517 415.937C121.265 415.937 124.245 415.847 126.945 415.334C130.417 414.674 133.558 413.018 137.03 412.374C141.139 411.612 145.474 411.99 149.648 411.99C156.436 411.99 163.061 411.474 169.24 408.099C175.774 404.53 183.011 402.569 189.158 398.179C194.654 394.253 199.686 389.919 205.313 386.23C207.987 384.478 209.93 381.899 212.437 379.927C214.052 378.657 215.903 377.637 217.68 376.666C219.825 375.494 221.478 373.645 223.651 372.528C225.19 371.737 226.441 369.048 227.439 367.595C230.261 363.484 234.471 358.926 235.642 353.811C236.614 349.559 237.905 345.377 238.828 341.122C239.847 336.421 242.371 332.552 243.343 327.804C244.279 323.231 243.794 318.267 243.794 313.608C243.794 307.808 243.777 302.114 243.243 296.343C242.416 287.416 241.555 278.596 241.06 269.679C240.828 265.488 239.951 260.631 239.179 256.497C238.199 251.25 236.8 246.359 234.563 241.616C233.604 239.583 233.184 237.349 232.054 235.396C230.855 233.32 229.898 231.627 229.245 229.257C228.082 225.039 226.916 220.852 225.482 216.76C224.329 213.471 223.558 209.626 221.418 206.977C218.739 203.66 215.523 201.435 212.638 198.399C211.082 196.762 209.164 195.816 207.445 194.426C205.703 193.015 204.243 191.27 202.253 190.26C199.116 188.669 196.485 185.371 193.473 183.354C187.107 179.092 180.549 177.242 173.178 176.722C164.831 176.134 156.521 174.048 148.068 175.708C141.993 176.902 135.519 175.718 129.78 178.668C129.214 178.959 124.331 182.602 124.236 182.395C122.55 178.712 125.796 173.972 126.845 170.776C127.955 167.394 129.026 164.188 129.755 160.663C130.418 157.458 130.006 153.818 130.006 150.551C130.006 147.484 129.554 144.525 129.554 141.453C129.554 137.792 132.271 138.712 135.023 138.712C144.984 138.712 154.82 139.088 164.75 139.726C169.198 140.012 173.849 139.78 178.271 140.302C182.356 140.784 186.462 141.509 190.563 141.672C197.614 141.952 204.155 142.033 211.183 140.795C218.642 139.481 225.876 138.491 232.531 134.492C238.618 130.835 240.844 123.951 242.992 117.172C245.818 108.251 247.055 100.124 244.923 90.8092C243.361 83.981 239.196 77.1802 232.506 75.353C228.659 74.3023 224.947 72.7848 221.117 71.626C216.864 70.3394 212.054 69.9251 207.671 69.2692C199.366 68.0263 190.871 68.4272 182.535 67.5701C172.843 66.5736 162.901 67.1865 153.16 67.1865C137.363 67.1865 122.094 72.6126 106.275 72.6126C101.589 72.6126 96.6968 72.9922 92.0514 73.6265C90.0594 73.8985 87.7004 73.7019 85.7549 74.202C83.7858 74.7082 82.1425 73.9069 82.1425 76.5588"/>
			{isBold && <path
				d="M41.0517 334.546C41.1429 333.661 41.6828 328.376 41.453 332.518C41.1008 338.867 40.4005 345.224 39.697 351.536C39.149 356.454 38.7939 361.325 38.7939 366.28C38.7939 367.432 38.8225 362.198 38.8441 361.731C39.1248 355.675 40.472 349.628 41.9547 343.808C43.159 339.081 44.559 333.171 47.5238 329.284C48.9618 327.399 48.7267 335.191 48.7279 335.477C48.765 344.436 48.6213 353.38 48.3767 362.334C48.2636 366.47 47.9747 370.808 48.3265 374.94C48.6008 378.161 49.8465 369.984 49.8818 369.651C50.7777 361.198 52.2252 352.731 54.3721 344.548C55.0275 342.051 56.7829 332.934 59.4896 331.641C60.239 331.283 59.834 339.269 59.8157 339.533C59.0827 350.112 57.7317 360.635 56.956 371.213C56.5878 376.232 55.6665 382.237 56.5044 387.272C56.9802 390.13 57.1014 381.498 57.4075 378.612C58.8549 364.967 59.8848 348.885 66.4885 336.765C68.0498 333.9 67.6926 336.901 67.6926 338.629C67.6926 347.888 67.6265 357.095 66.9651 366.335C66.3646 374.725 65.4764 383.084 65.0837 391.492C64.8806 395.842 64.8934 394.627 65.0837 391.218C65.5204 383.395 66.7864 375.553 68.1442 367.87C69.4733 360.347 71.2354 352.358 74.8169 345.672C75.9358 343.583 77.0728 342.436 77.3757 345.507C78.2019 353.889 77.7056 362.674 77.5764 371.076C77.4461 379.54 76.5636 387.924 76.297 396.37C76.1582 400.769 76.4706 394.765 76.5479 393.959C77.9355 379.473 79.7998 363.192 86.0051 350.111C87.4658 347.033 88.4546 347.24 88.9151 350.55C89.8367 357.174 89.8842 363.938 89.5171 370.61C88.944 381.028 85.9748 412.175 86.7075 401.769C87.7776 386.573 92.2236 369.784 99.8524 357.017C99.9002 356.937 102.528 352.195 102.813 354.058C103.77 360.336 102.457 367.664 101.709 373.844C100.531 383.572 99.2967 393.24 98.9493 403.057C98.9399 403.323 98.9746 412.066 100.304 409.634C102.402 405.797 102.398 400.123 102.938 395.85C104.125 386.45 106.036 377.238 108.933 368.281C110.183 364.418 111.817 358.392 115.029 355.812C117.831 353.561 116.404 366.276 116.334 366.883C115.213 376.559 112.919 386.044 111.442 395.658C110.713 400.4 108.696 407.898 109.786 412.813C109.986 413.711 110.281 411.04 110.413 410.127C110.894 406.814 111.424 403.513 111.944 400.207C113.694 389.068 115.286 378.084 118.416 367.267C119.788 362.525 121.293 356.686 124.461 352.879C126.091 350.921 125.225 361.962 125.164 362.718C124.353 372.737 122.43 382.642 121.25 392.616C120.782 396.573 120.355 400.549 120.172 404.537C120.136 405.321 120.225 407.492 120.623 406.839C122.89 403.125 123.37 397.184 124.035 392.917C125.619 382.748 126.953 372.524 129.454 362.553C129.61 361.927 132.725 349.973 135.324 351.865C138.138 353.915 135.679 365.649 135.424 368.308C134.613 376.749 133.315 385.158 132.815 393.63C132.805 393.797 132.082 401.657 133.894 398.645C137.142 393.245 137.32 384.645 138.108 378.475C139.338 368.849 140.244 359.111 144.053 350.194C144.704 348.672 148.056 340.288 151.027 341.726C152.596 342.485 152.441 346.104 152.457 347.316C152.531 352.757 152.04 358.251 151.479 363.649C150.517 372.894 148.957 382.01 148.619 391.328C148.6 391.851 148.141 396.064 148.795 396.699C149.615 397.496 149.643 394.473 149.873 393.301C153.377 375.441 152.106 356.345 158.101 339.067C158.303 338.485 164.074 326.28 164.925 329.996C165.564 332.792 165.096 336.45 164.925 339.204C164.503 345.99 163.771 352.742 162.968 359.484C161.869 368.716 160.59 377.949 160.359 387.272C160.293 389.933 160.094 393.149 160.986 395.713C161.632 397.57 162.231 395.875 162.416 394.945C163.889 387.53 163.792 379.348 164.423 371.816C165.593 357.839 166.532 343.64 169.741 329.996C170.31 327.578 172.489 317.281 176.113 317.281C178.87 317.281 176.714 336.352 176.589 337.615C175.212 351.549 172.684 365.383 172.526 379.434C172.505 381.272 172.09 385.283 173.203 387.108C173.982 388.385 174.883 386.792 175.084 386.121C176.918 380.011 176.502 372.277 176.865 365.951C177.774 350.138 177.935 333.723 181.933 318.377C182.87 314.78 184.189 311.178 186.122 308.073C186.676 307.182 188.216 305.33 188.605 306.319C189.426 308.4 189.107 311.921 189.107 314.02C189.107 319.892 188.765 325.737 188.304 331.586C187.384 343.278 186.161 354.926 185.821 366.664C185.787 367.853 185.796 380.378 188.229 373.378C190.764 366.085 190.399 357.486 191.014 349.837C192.16 335.57 193.239 320.685 196.834 306.867C196.89 306.648 200.861 294.238 202.503 299.413C203.679 303.119 203.247 307.883 203.005 311.663C202.594 318.077 201.683 324.452 200.897 330.819C199.37 343.2 197.248 355.931 197.586 368.472C197.774 375.468 200.005 371.457 200.897 367.431C206.044 344.227 203.47 318.335 213.39 296.536C214.585 293.909 220.486 281.928 221.969 291.109C222.696 295.606 222.148 300.468 221.719 304.949C220.993 312.521 219.873 320.04 218.784 327.557C217.489 336.491 215.999 345.581 215.999 354.661C215.999 362.643 218.394 354.251 218.959 351.482C221.268 340.174 222.407 328.619 224.578 317.281C225.635 311.764 226.891 306.278 228.416 300.893C229.217 298.067 230.074 294.079 231.953 291.74C234.403 288.691 234.261 299.19 234.261 299.495C234.261 309.379 233.86 319.26 233.86 329.147C233.86 332.134 233.86 335.121 233.86 338.108C233.86 338.227 233.86 341.146 233.86 338.053C233.86 330.888 233.859 323.73 233.609 316.568C233.196 304.691 232.838 292.831 233.158 280.942C233.321 274.862 233.754 268.826 234.261 262.773C234.451 260.512 235.094 257.233 234.562 254.908C234.325 253.871 233.021 256.355 232.656 257.347C231.294 261.047 230.296 264.931 229.345 268.775C227.124 277.744 225.629 286.893 223.575 295.905C222.733 299.6 222.12 302.912 222.12 296.837C222.12 285.433 222.38 274.058 222.797 262.664C223.246 250.42 223.775 238.195 224.528 225.969C224.916 219.668 221.009 232.92 220.841 233.45C213.369 256.901 210.183 281.946 201.801 305.058C201.099 306.993 200.844 311.099 199.016 310.512C198.309 310.285 198.639 304.771 198.64 304.675C198.688 290.38 199.507 276.001 201.098 261.814C202.471 249.569 204.605 237.489 207.846 225.667C208.93 221.715 210.154 217.81 211.233 213.856C211.59 212.546 211.784 211.816 211.157 213.527C202.258 237.832 195.666 263.148 188.631 288.15C187.975 290.48 186.151 297.037 185.319 299.824C184.856 301.375 184.444 305.544 183.488 304.291C182.775 303.356 183.325 297.877 183.337 297.33C183.462 292.074 183.804 286.84 184.19 281.6C185.294 266.614 186.582 251.65 188.555 236.766C189.962 226.153 191.035 214.874 194.024 204.593C194.671 202.368 193.216 209.18 192.694 211.444C189.945 223.383 187.796 235.514 185.495 247.564C183.316 258.971 181.061 270.37 179.073 281.819C178.411 285.631 178.794 274.831 178.797 274.557C179.091 250.292 180.548 225.887 183.463 201.825C184.946 189.588 177.59 225.666 174.658 237.588C173.175 243.617 171.676 249.793 169.741 255.675C169.349 256.869 169.371 251.35 169.39 250.907C169.833 240.675 169.968 230.442 170.544 220.214C170.996 212.174 172.627 203.324 171.898 195.276C171.752 193.663 170.183 200.024 170.117 200.428C168.402 211.046 166.093 221.498 163.194 231.806C161.883 236.464 160.51 241.112 159.004 245.7C158.428 247.458 157.453 252.455 156.772 250.743C156.04 248.903 156.819 244.711 156.947 242.96C157.324 237.813 157.814 232.674 158.227 227.531C158.978 218.164 160.073 208.863 161.262 199.551C161.849 194.958 162.515 190.364 162.868 185.739C162.945 184.719 163.622 182.25 162.767 182.67C162.099 182.998 161.267 185.648 161.087 186.095C159.81 189.253 158.715 192.501 157.7 195.769C154.508 206.044 151.969 216.582 149.422 227.065C148.132 232.373 147.34 238.057 145.634 243.234C144.639 246.252 145.345 236.822 145.383 233.615C145.511 222.852 145.995 212.092 146.261 201.332C146.343 198.011 146.471 194.697 146.712 191.384C146.813 190.003 147.56 185.959 147.089 187.246C145.517 191.538 145 196.779 144.003 201.25C141.826 211.011 139.667 220.775 137.23 230.463C136.442 233.596 135.684 236.745 134.847 239.863C134.816 239.978 134.344 242.166 134.17 240.603C133.533 234.883 134.055 228.744 134.069 223.009C134.092 214.083 134.378 205.193 134.972 196.29C135.202 192.842 135.472 189.399 135.775 185.958C135.799 185.684 135.824 185.41 135.85 185.136C135.886 184.761 135.914 184.747 135.8 185.492C134.814 191.959 133.056 198.253 131.31 204.511C128.268 215.41 125.815 226.477 122.931 237.424C122.439 239.292 121.026 244.793 120.975 242.85C120.799 236.25 120.959 229.611 120.975 223.009C120.998 212.756 121.393 202.513 121.426 192.261C121.428 191.8 122.045 182.036 120.874 186.616C116.519 203.653 111.989 220.618 107.428 237.588C107.098 238.819 105.171 247.943 105.171 242.028C105.171 234.546 105.572 227.085 105.848 219.611C106.237 209.072 106.619 198.546 107.529 188.041C107.903 183.717 108.259 179.337 108.933 175.051C108.983 174.737 108.972 174.385 109.134 174.119C109.507 173.508 109.05 175.589 108.933 176.312C105.537 197.337 99.9602 218.219 94.9858 238.849C94.4015 241.272 94.0008 244.153 93.6312 240C92.8471 231.189 92.6308 222.32 92.5525 213.472C92.4507 201.965 92.5436 190.421 94.3587 179.052C94.5355 177.945 97.3934 164.214 96.9174 172.448C96.482 179.979 94.456 187.502 92.7783 194.782C90.0674 206.546 87.1897 218.279 85.0519 230.189C84.8694 231.206 84.3997 236.817 84.3997 232.601C84.3997 224.928 84.385 217.254 84.3997 209.581C84.4185 199.767 84.1665 189.738 85.5787 180.011C85.8389 178.219 86.56 173.241 87.2594 174.887C88.1205 176.913 87.3899 181.19 87.2343 183.163C86.6567 190.493 77.0695 252.424 75.8956 252.168C75.082 251.99 75.0486 238.099 75.0176 236.931C74.7085 225.261 74.6634 213.45 75.3187 201.798C75.8661 192.064 75.9204 180.306 79.5832 171.16C80.9137 167.838 78.446 178.307 77.7269 181.848C75.6232 192.204 73.7542 202.631 71.8568 213.034C70.9655 217.922 70.2058 222.839 69.2981 227.723C69.0348 229.139 69.2529 232.756 68.1943 231.888C67.6446 231.438 67.8001 226.542 67.793 226.298C67.6622 221.796 67.6926 217.29 67.6926 212.787C67.6926 200.365 67.6582 187.949 68.7713 175.572C69.9288 162.702 71.4328 149.402 75.1681 137.068C75.6335 135.532 76.7164 131.295 77.2753 132.793C78.1102 135.032 77.2241 139.725 77.0747 141.892C76.3402 152.538 74.8193 163.074 73.7633 173.681C73.411 177.22 73.1909 180.768 72.9104 184.314C72.8095 185.59 72.625 187.425 72.7599 184.533C73.5909 166.717 75.1074 148.303 78.3791 130.848C80.4309 119.901 83.3937 109.077 86.7075 98.5103C88.1418 93.937 88.4907 95.1526 88.6893 99.0584C89.7572 120.058 87.6431 140.849 85.955 161.733C85.577 166.409 84.8512 180.458 84.8512 175.764C84.8512 167.384 85.4213 158.912 86.4065 150.606C87.9223 137.828 90.4256 124.911 94.158 112.678C95.9364 106.85 98.1228 101.036 100.605 95.5232C101.679 93.1371 103.549 88.1765 106.375 87.3018C111.478 85.7221 107.898 107.466 107.629 109.034C105.069 123.965 101.739 138.723 99.2504 153.676C98.3749 158.936 97.7236 162.877 96.9676 168.145C96.4915 171.462 95.4899 175.885 95.7886 179.381C96.1595 183.723 98.2288 171.036 98.7988 166.72C100.783 151.697 102.608 136.561 106.274 121.886C107.975 115.079 110.118 108.424 112.997 102.1C113.605 100.765 116.067 94.2105 118.516 94.153C122.932 94.0492 115.823 141.48 115.305 146.276C114.338 155.24 112.847 164.357 112.847 173.407C112.847 177.538 112.445 165.152 112.445 161.02C112.445 151.926 113.099 142.802 114.502 133.835C116.87 118.71 120.072 102.148 126.744 88.5076C127.638 86.6799 133.738 75.9921 136.277 81.9854C137.458 84.7734 137.072 88.7306 136.854 91.6318C136.442 97.093 135.352 102.419 134.22 107.746C132.562 115.541 130.24 123.411 129.629 131.423C129.182 137.28 133.712 125.833 134.044 124.983C135.764 120.588 149.293 79.9828 152.909 81.958C154.715 82.9445 152.935 92.2965 152.733 93.7145C151.464 102.633 149.309 111.413 147.616 120.242C146.866 124.149 146.039 128.069 145.533 132.026C144.989 136.286 146.437 130.848 146.462 130.765C149.176 121.78 151.38 112.605 154.288 103.69C156.391 97.244 158.976 90.6059 163.068 85.3287C166.368 81.0737 166.673 83.7969 166.279 87.9047C165.482 96.2144 162.868 104.146 161.011 112.213C159.621 118.254 157.481 125.428 157.85 131.752C158.048 135.141 160.82 129.395 161.061 128.902C164.394 122.086 165.899 114.302 168.487 107.143C171.477 98.8682 175.477 90.4713 181.18 84.0133C184.345 80.4301 186.589 80.6201 185.946 86.2605C185.12 93.5169 182.349 100.564 180.428 107.526C178.905 113.044 176.128 120.598 176.665 126.463C176.896 128.993 180.609 119.024 180.653 118.872C183.385 109.581 185.981 100.487 190.086 91.7688C192.303 87.0589 194.932 80.5922 199.242 77.6006C203.192 74.8587 199.216 89.8159 198.991 90.7C196.691 99.7249 192.916 108.19 190.662 117.228C189.931 120.161 189.193 123.128 188.631 126.107C188.567 126.443 188.755 127.394 188.907 127.093C191.36 122.227 192.802 116.543 194.576 111.363C197.596 102.545 201.092 93.9841 205.889 86.1234C206.309 85.436 214.199 74.9541 214.318 77.1074C214.653 83.1498 210.73 90.6331 208.724 95.9343C205.55 104.325 202.285 112.664 199.794 121.338C199.268 123.169 198.626 128.658 199.643 127.093C208.144 114.016 209.77 95.4049 221.116 84.397C221.638 83.891 224.721 80.8264 225.005 82.9993C225.857 89.5151 221.887 97.3107 219.812 103.059C216.793 111.423 213.56 119.794 211.408 128.491C209.988 134.231 213.591 127.351 214.243 125.942C219.977 113.548 224.486 100.368 233.208 89.9327C236.971 85.4303 235.711 90.6889 234.914 93.9337C233.056 101.494 229.614 108.468 227.538 115.967C226.68 119.067 225.834 122.226 225.205 125.394C225.136 125.742 225.403 126.679 225.582 126.381C228.819 120.964 230.374 114.272 233.208 108.568C234.202 106.566 236.415 102.909 235.265 107.691C234.06 112.7 232.301 117.573 230.699 122.434"/>
			}
		</svg>
	);
}

export default Digit5;