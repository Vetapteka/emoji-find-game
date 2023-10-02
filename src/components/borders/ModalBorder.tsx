import React, { JSX } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: min(80vw, 450px);
  position: relative;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
	box-sizing: border-box;
    padding: 2vh;
  }
`;

interface ModalBorderProps {
	children: JSX.Element;
}

function ModalBorder({ children }: ModalBorderProps): JSX.Element {
	return (
		<Wrapper>
			{children}
			<svg preserveAspectRatio="none" stroke="#A6C9FE" strokeWidth="0.14vh" viewBox="0 0 1358 1169" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M19.8525 5H348.462H629.729H1073.44H1142.03C1188.67 5 1235.43 7.19447 1282.31 7.19447H1314.5C1321.45 7.19447 1336.45 10.8565 1342.07 16.1652C1350.15 23.8104 1350.15 37.4323 1350.15 49.0396V49.6067C1355.1 75.9202 1343.68 380.662 1343.68 408.245C1343.68 424.886 1347.29 803.803 1347.29 820.247V894.859C1347.29 943.874 1351 990.664 1351 1039.82C1351 1064.53 1352.07 1089.64 1352.85 1113.7C1353.16 1123.08 1353.58 1145.27 1347.29 1152.71C1340.89 1160.27 1333.87 1163.68 1325.01 1163.68C1293.84 1163.68 988.619 1155.8 958.024 1161.37H775.506C725.336 1161.37 466.359 1157.1 416.226 1157.1C355.769 1157.1 296.498 1154.9 236.14 1154.9H45.4452C30.1298 1154.9 9.87403 1147.53 9.87403 1126.38C9.87403 1099.93 8.71327 1066.43 8.71327 1039.82C8.71327 1010.67 5 989.056 5 960.648C5 937.738 6.85667 262.753 6.85667 240.906V172.877V31.3337C6.85667 19.7275 6.98869 5 19.8525 5Z"
					fill="white" stroke="#71A7FC" strokeWidth="0.4vh"/>
				<path
					d="M8.38367 890.412C-7.41328 890.412 39.6262 900.922 55.4232 900.922C77.5084 900.922 99.3634 896.553 121.342 893.526C171.259 886.653 220.804 886.909 270.994 886.909C298.557 886.909 326.829 882.773 353.873 893.915C382.56 905.734 411.039 911.588 440.379 914.934C471.332 918.464 500.974 929.733 532.218 923.497C561.286 917.697 590.733 916.359 620.004 918.632C669.822 922.5 719.186 925.443 769.122 925.443C817.001 925.443 866.59 925.196 914.187 934.007C949.804 940.599 986.804 935.953 1022.56 935.953C1065.15 935.953 1107.75 936.397 1150.34 935.953C1198.09 935.455 1245.42 925.443 1293.28 925.443C1310.77 925.443 1328.39 926.578 1345.86 925.249C1358.36 924.299 1348.38 921.94 1342.77 921.94"/>
				<path
					d="M8.19812 838.574C-7.59883 838.574 39.4407 849.084 55.2376 849.084C77.3228 849.084 99.1778 844.715 121.157 841.688C171.073 834.815 220.619 835.071 270.809 835.071C298.372 835.071 326.644 830.935 353.688 842.077C382.374 853.896 410.853 859.75 440.194 863.096C471.147 866.626 500.788 877.895 532.033 871.659C561.1 865.859 590.548 864.521 619.818 866.794C669.636 870.662 719 873.606 768.937 873.606C816.815 873.606 866.404 873.358 914.002 882.169C949.619 888.761 986.618 884.115 1022.37 884.115C1064.97 884.115 1107.57 884.559 1150.16 884.115C1197.9 883.617 1245.24 873.606 1293.09 873.606C1310.58 873.606 1328.2 874.74 1345.68 873.411C1358.17 872.461 1348.2 870.102 1342.58 870.102"/>
				<path
					d="M8.19812 786.39C-7.59883 786.39 39.4407 796.899 55.2376 796.899C77.3228 796.899 99.1778 792.53 121.157 789.504C171.073 782.63 220.619 782.887 270.809 782.887C298.372 782.887 326.644 778.751 353.688 789.893C382.374 801.712 410.853 807.566 440.194 810.912C471.147 814.441 500.788 825.71 532.033 819.475C561.1 813.674 590.548 812.337 619.818 814.609C669.636 818.477 719 821.421 768.937 821.421C816.815 821.421 866.404 821.174 914.002 829.984C949.619 836.577 986.618 831.93 1022.37 831.93C1064.97 831.93 1107.57 832.374 1150.16 831.93C1197.9 831.433 1245.24 821.421 1293.09 821.421C1310.58 821.421 1328.2 822.555 1345.68 821.226C1358.17 820.277 1348.2 817.918 1342.58 817.918"/>
				<path
					d="M8.38367 735.192C-7.41328 735.192 39.6262 745.701 55.4232 745.701C77.5084 745.701 99.3634 741.332 121.342 738.305C171.259 731.432 220.804 731.688 270.994 731.688C298.557 731.688 326.829 727.553 353.873 738.695C382.56 750.513 411.039 756.368 440.379 759.713C471.332 763.243 500.974 774.512 532.218 768.277C561.286 762.476 590.733 761.139 620.004 763.411C669.822 767.279 719.186 770.223 769.122 770.223C817.001 770.223 866.59 769.976 914.187 778.786C949.804 785.379 986.804 780.732 1022.56 780.732C1065.15 780.732 1107.75 781.176 1150.34 780.732C1198.09 780.234 1245.42 770.223 1293.28 770.223C1310.77 770.223 1328.39 771.357 1345.86 770.028C1358.36 769.078 1348.38 766.72 1342.77 766.72"/>
				<path
					d="M8.19812 683.353C-7.59883 683.353 39.4407 693.862 55.2376 693.862C77.3228 693.862 99.1778 689.493 121.157 686.467C171.073 679.593 220.619 679.85 270.809 679.85C298.372 679.85 326.644 675.714 353.688 686.856C382.374 698.675 410.853 704.529 440.194 707.875C471.147 711.404 500.788 722.673 532.033 716.438C561.1 710.637 590.548 709.3 619.818 711.572C669.636 715.44 719 718.384 768.937 718.384C816.815 718.384 866.404 718.137 914.002 726.947C949.619 733.54 986.618 728.893 1022.37 728.893C1064.97 728.893 1107.57 729.337 1150.16 728.893C1197.9 728.396 1245.24 718.384 1293.09 718.384C1310.58 718.384 1328.2 719.518 1345.68 718.189C1358.17 717.24 1348.2 714.881 1342.58 714.881"/>
				<path
					d="M8.19812 631.169C-7.59883 631.169 39.4407 641.678 55.2376 641.678C77.3228 641.678 99.1778 637.31 121.157 634.283C171.073 627.409 220.619 627.666 270.809 627.666C298.372 627.666 326.644 623.53 353.688 634.672C382.374 646.491 410.853 652.345 440.194 655.691C471.147 659.221 500.788 670.489 532.033 664.254C561.1 658.453 590.548 657.116 619.818 659.389C669.636 663.257 719 666.2 768.937 666.2C816.815 666.2 866.404 665.953 914.002 674.764C949.619 681.356 986.618 676.71 1022.37 676.71C1064.97 676.71 1107.57 677.154 1150.16 676.71C1197.9 676.212 1245.24 666.2 1293.09 666.2C1310.58 666.2 1328.2 667.334 1345.68 666.006C1358.17 665.056 1348.2 662.697 1342.58 662.697"/>
				<path
					d="M8.38367 578.642C-7.41328 578.642 39.6262 589.151 55.4232 589.151C77.5084 589.151 99.3634 584.782 121.342 581.756C171.259 574.882 220.804 575.139 270.994 575.139C298.557 575.139 326.829 571.003 353.873 582.145C382.56 593.964 411.039 599.818 440.379 603.164C471.332 606.693 500.974 617.962 532.218 611.727C561.286 605.926 590.733 604.589 620.004 606.861C669.822 610.729 719.186 613.673 769.122 613.673C817.001 613.673 866.59 613.426 914.187 622.236C949.804 628.829 986.804 624.182 1022.56 624.182C1065.15 624.182 1107.75 624.626 1150.34 624.182C1198.09 623.685 1245.42 613.673 1293.28 613.673C1310.77 613.673 1328.39 614.807 1345.86 613.478C1358.36 612.529 1348.38 610.17 1342.77 610.17"/>
				<path
					d="M8.19812 526.803C-7.59883 526.803 39.4407 537.312 55.2376 537.312C77.3228 537.312 99.1778 532.943 121.157 529.917C171.073 523.043 220.619 523.3 270.809 523.3C298.372 523.3 326.644 519.164 353.688 530.306C382.374 542.125 410.853 547.979 440.194 551.325C471.147 554.854 500.788 566.123 532.033 559.888C561.1 554.087 590.548 552.75 619.818 555.022C669.636 558.89 719 561.834 768.937 561.834C816.815 561.834 866.404 561.587 914.002 570.397C949.619 576.99 986.618 572.343 1022.37 572.343C1064.97 572.343 1107.57 572.788 1150.16 572.343C1197.9 571.846 1245.24 561.834 1293.09 561.834C1310.58 561.834 1328.2 562.968 1345.68 561.64C1358.17 560.69 1348.2 558.331 1342.58 558.331"/>
				<path
					d="M8.19812 474.619C-7.59883 474.619 39.4407 485.129 55.2376 485.129C77.3228 485.129 99.1778 480.76 121.157 477.733C171.073 470.86 220.619 471.116 270.809 471.116C298.372 471.116 326.644 466.98 353.688 478.122C382.374 489.941 410.853 495.795 440.194 499.141C471.147 502.671 500.788 513.94 532.033 507.704C561.1 501.904 590.548 500.566 619.818 502.839C669.636 506.707 719 509.651 768.937 509.651C816.815 509.651 866.404 509.403 914.002 518.214C949.619 524.806 986.618 520.16 1022.37 520.16C1064.97 520.16 1107.57 520.604 1150.16 520.16C1197.9 519.662 1245.24 509.651 1293.09 509.651C1310.58 509.651 1328.2 510.785 1345.68 509.456C1358.17 508.506 1348.2 506.147 1342.58 506.147"/>
				<path
					d="M8.38367 423.421C-7.41328 423.421 39.6262 433.93 55.4232 433.93C77.5084 433.93 99.3634 429.562 121.342 426.535C171.259 419.661 220.804 419.918 270.994 419.918C298.557 419.918 326.829 415.782 353.873 426.924C382.56 438.743 411.039 444.597 440.379 447.943C471.332 451.473 500.974 462.741 532.218 456.506C561.286 450.705 590.733 449.368 620.004 451.641C669.822 455.509 719.186 458.452 769.122 458.452C817.001 458.452 866.59 458.205 914.187 467.015C949.804 473.608 986.804 468.962 1022.56 468.962C1065.15 468.962 1107.75 469.406 1150.34 468.962C1198.09 468.464 1245.42 458.452 1293.28 458.452C1310.77 458.452 1328.39 459.586 1345.86 458.258C1358.36 457.308 1348.38 454.949 1342.77 454.949"/>
				<path
					d="M8.19812 371.584C-7.59883 371.584 39.4407 382.094 55.2376 382.094C77.3228 382.094 99.1778 377.725 121.157 374.698C171.073 367.824 220.619 368.081 270.809 368.081C298.372 368.081 326.644 363.945 353.688 375.087C382.374 386.906 410.853 392.76 440.194 396.106C471.147 399.636 500.788 410.904 532.033 404.669C561.1 398.868 590.548 397.531 619.818 399.804C669.636 403.672 719 406.615 768.937 406.615C816.815 406.615 866.404 406.368 914.002 415.179C949.619 421.771 986.618 417.125 1022.37 417.125C1064.97 417.125 1107.57 417.569 1150.16 417.125C1197.9 416.627 1245.24 406.615 1293.09 406.615C1310.58 406.615 1328.2 407.749 1345.68 406.421C1358.17 405.471 1348.2 403.112 1342.58 403.112"/>
				<path
					d="M8.38367 268.497C-7.41328 268.497 39.6262 279.007 55.4232 279.007C77.5084 279.007 99.3634 274.638 121.342 271.611C171.259 264.738 220.804 264.994 270.994 264.994C298.557 264.994 326.829 260.858 353.873 272C382.56 283.819 411.039 289.673 440.379 293.019C471.332 296.549 500.974 307.817 532.218 301.582C561.286 295.781 590.733 294.444 620.004 296.717C669.822 300.585 719.186 303.528 769.122 303.528C817.001 303.528 866.59 303.281 914.187 312.092C949.804 318.684 986.804 314.038 1022.56 314.038C1065.15 314.038 1107.75 314.482 1150.34 314.038C1198.09 313.54 1245.42 303.528 1293.28 303.528C1310.77 303.528 1328.39 304.662 1345.86 303.334C1358.36 302.384 1348.38 300.025 1342.77 300.025"/>
				<path
					d="M8.19812 216.658C-7.59883 216.658 39.4407 227.168 55.2376 227.168C77.3228 227.168 99.1778 222.799 121.157 219.772C171.073 212.899 220.619 213.155 270.809 213.155C298.372 213.155 326.644 209.019 353.688 220.161C382.374 231.98 410.853 237.834 440.194 241.18C471.147 244.71 500.788 255.979 532.033 249.743C561.1 243.943 590.548 242.605 619.818 244.878C669.636 248.746 719 251.69 768.937 251.69C816.815 251.69 866.404 251.442 914.002 260.253C949.619 266.845 986.618 262.199 1022.37 262.199C1064.97 262.199 1107.57 262.643 1150.16 262.199C1197.9 261.701 1245.24 251.69 1293.09 251.69C1310.58 251.69 1328.2 252.824 1345.68 251.495C1358.17 250.545 1348.2 248.186 1342.58 248.186"/>
				<path
					d="M8.19812 164.475C-7.59883 164.475 39.4407 174.984 55.2376 174.984C77.3228 174.984 99.1778 170.615 121.157 167.589C171.073 160.715 220.619 160.972 270.809 160.972C298.372 160.972 326.644 156.836 353.688 167.978C382.374 179.797 410.853 185.651 440.194 188.997C471.147 192.526 500.788 203.795 532.033 197.56C561.1 191.759 590.548 190.422 619.818 192.694C669.636 196.562 719 199.506 768.937 199.506C816.815 199.506 866.404 199.259 914.002 208.069C949.619 214.662 986.618 210.015 1022.37 210.015C1064.97 210.015 1107.57 210.459 1150.16 210.015C1197.9 209.518 1245.24 199.506 1293.09 199.506C1310.58 199.506 1328.2 200.64 1345.68 199.311C1358.17 198.362 1348.2 196.003 1342.58 196.003"/>
				<path
					d="M8.38367 113.277C-7.41328 113.277 39.6262 123.786 55.4232 123.786C77.5084 123.786 99.3634 119.417 121.342 116.39C171.259 109.517 220.804 109.773 270.994 109.773C298.557 109.773 326.829 105.638 353.873 116.78C382.56 128.598 411.039 134.453 440.379 137.798C471.332 141.328 500.974 152.597 532.218 146.362C561.286 140.561 590.733 139.224 620.004 141.496C669.822 145.364 719.186 148.308 769.122 148.308C817.001 148.308 866.59 148.061 914.187 156.871C949.804 163.464 986.804 158.817 1022.56 158.817C1065.15 158.817 1107.75 159.261 1150.34 158.817C1198.09 158.319 1245.42 148.308 1293.28 148.308C1310.77 148.308 1328.39 149.442 1345.86 148.113C1358.36 147.163 1348.38 144.805 1342.77 144.805"/>
				<path
					d="M8.19812 61.4376C-7.59883 61.4376 39.4407 71.947 55.2376 71.947C77.3228 71.947 99.1778 67.5781 121.157 64.5515C171.073 57.6779 220.619 57.9345 270.809 57.9345C298.372 57.9345 326.644 53.7987 353.688 64.9408C382.374 76.7595 410.853 82.6137 440.194 85.9595C471.147 89.4892 500.788 100.758 532.033 94.5227C561.1 88.7219 590.548 87.3847 619.818 89.6573C669.636 93.5252 719 96.4689 768.937 96.4689C816.815 96.4689 866.404 96.2218 914.002 105.032C949.619 111.625 986.618 106.978 1022.37 106.978C1064.97 106.978 1107.57 107.422 1150.16 106.978C1197.9 106.481 1245.24 96.4689 1293.09 96.4689C1310.58 96.4689 1328.2 97.6029 1345.68 96.2743C1358.17 95.3245 1348.2 92.9658 1342.58 92.9658"/>
				<path
					d="M8.19812 9.25405C-7.59883 9.25405 39.4407 19.7634 55.2376 19.7634C77.3228 19.7634 99.1778 15.3945 121.157 12.3679C171.073 5.49435 220.619 5.75093 270.809 5.75093C298.372 5.75093 326.644 1.61509 353.688 12.7572C382.374 24.5759 410.853 30.4301 440.194 33.7759C471.147 37.3056 500.788 48.5743 532.033 42.3391C561.1 36.5383 590.548 35.2011 619.818 37.4737C669.636 41.3416 719 44.2853 768.937 44.2853C816.815 44.2853 866.404 44.0382 914.002 52.8485C949.619 59.4411 986.618 54.7947 1022.37 54.7947C1064.97 54.7947 1107.57 55.2387 1150.16 54.7947C1197.9 54.2969 1245.24 44.2853 1293.09 44.2853C1310.58 44.2853 1328.2 45.4193 1345.68 44.0907C1358.17 43.1409 1348.2 40.7822 1342.58 40.7822"/>
				<path
					d="M8.19812 319.401C-7.59883 319.401 39.4407 329.91 55.2376 329.91C77.3228 329.91 99.1778 325.541 121.157 322.514C171.073 315.641 220.619 315.897 270.809 315.897C298.372 315.897 326.644 311.762 353.688 322.904C382.374 334.722 410.853 340.577 440.194 343.922C471.147 347.452 500.788 358.721 532.033 352.486C561.1 346.685 590.548 345.348 619.818 347.62C669.636 351.488 719 354.432 768.937 354.432C816.815 354.432 866.404 354.185 914.002 362.995C949.619 369.588 986.618 364.941 1022.37 364.941C1064.97 364.941 1107.57 365.385 1150.16 364.941C1197.9 364.443 1245.24 354.432 1293.09 354.432C1310.58 354.432 1328.2 355.566 1345.68 354.237C1358.17 353.287 1348.2 350.929 1342.58 350.929"/>
				<path
					d="M8.19812 1096.54C-7.59883 1096.54 39.4407 1107.05 55.2376 1107.05C77.3228 1107.05 99.1778 1102.68 121.157 1099.65C171.073 1092.78 220.619 1093.04 270.809 1093.04C298.372 1093.04 326.644 1088.9 353.688 1100.04C382.374 1111.86 410.853 1117.71 440.194 1121.06C471.147 1124.59 500.788 1135.86 532.033 1129.62C561.1 1123.82 590.548 1122.49 619.818 1124.76C669.636 1128.63 719 1131.57 768.937 1131.57C816.815 1131.57 866.404 1131.32 914.002 1140.13C949.619 1146.73 986.618 1142.08 1022.37 1142.08C1064.97 1142.08 1107.57 1142.52 1150.16 1142.08C1197.9 1141.58 1245.24 1131.57 1293.09 1131.57C1310.58 1131.57 1328.2 1132.7 1345.68 1131.37C1358.17 1130.43 1348.2 1128.07 1342.58 1128.07"/>
				<path
					d="M8.38367 1045.34C-7.41328 1045.34 39.6262 1055.85 55.4232 1055.85C77.5084 1055.85 99.3634 1051.48 121.342 1048.45C171.259 1041.58 220.804 1041.84 270.994 1041.84C298.557 1041.84 326.829 1037.7 353.873 1048.84C382.56 1060.66 411.039 1066.52 440.379 1069.86C471.332 1073.39 500.974 1084.66 532.218 1078.43C561.286 1072.62 590.733 1071.29 620.004 1073.56C669.822 1077.43 719.186 1080.37 769.122 1080.37C817.001 1080.37 866.59 1080.12 914.187 1088.93C949.804 1095.53 986.804 1090.88 1022.56 1090.88C1065.15 1090.88 1107.75 1091.32 1150.34 1090.88C1198.09 1090.38 1245.42 1080.37 1293.28 1080.37C1310.77 1080.37 1328.39 1081.51 1345.86 1080.18C1358.36 1079.23 1348.38 1076.87 1342.77 1076.87"/>
				<path
					d="M8.19812 993.497C-7.59883 993.497 39.4407 1004.01 55.2376 1004.01C77.3228 1004.01 99.1778 999.638 121.157 996.611C171.073 989.738 220.619 989.994 270.809 989.994C298.372 989.994 326.644 985.858 353.688 997C382.374 1008.82 410.853 1014.67 440.194 1018.02C471.147 1021.55 500.788 1032.82 532.033 1026.58C561.1 1020.78 590.548 1019.44 619.818 1021.72C669.636 1025.58 719 1028.53 768.937 1028.53C816.815 1028.53 866.404 1028.28 914.002 1037.09C949.619 1043.68 986.618 1039.04 1022.37 1039.04C1064.97 1039.04 1107.57 1039.48 1150.16 1039.04C1197.9 1038.54 1245.24 1028.53 1293.09 1028.53C1310.58 1028.53 1328.2 1029.66 1345.68 1028.33C1358.17 1027.38 1348.2 1025.03 1342.58 1025.03"/>
				<path
					d="M8.19812 941.316C-7.59883 941.316 39.4407 951.825 55.2376 951.825C77.3228 951.825 99.1778 947.456 121.157 944.429C171.073 937.556 220.619 937.812 270.809 937.812C298.372 937.812 326.644 933.677 353.688 944.819C382.374 956.637 410.853 962.492 440.194 965.837C471.147 969.367 500.788 980.636 532.033 974.401C561.1 968.6 590.548 967.263 619.818 969.535C669.636 973.403 719 976.347 768.937 976.347C816.815 976.347 866.404 976.1 914.002 984.91C949.619 991.503 986.618 986.856 1022.37 986.856C1064.97 986.856 1107.57 987.3 1150.16 986.856C1197.9 986.358 1245.24 976.347 1293.09 976.347C1310.58 976.347 1328.2 977.481 1345.68 976.152C1358.17 975.202 1348.2 972.844 1342.58 972.844"/>
				<path
					d="M1134.28 15.868C1134.28 2.47342 1123.93 42.3593 1123.93 55.7539C1123.93 74.4804 1128.23 93.0118 1131.21 111.648C1137.98 153.973 1137.73 195.984 1137.73 238.541C1137.73 261.913 1141.8 285.885 1130.83 308.817C1119.19 333.14 1113.43 357.288 1110.13 382.167C1106.66 408.412 1095.56 433.546 1101.7 460.039C1107.41 484.686 1108.73 509.655 1106.49 534.475C1102.68 576.716 1099.78 618.573 1099.78 660.916C1099.78 701.513 1100.03 743.561 1091.35 783.92C1084.86 814.12 1089.43 845.493 1089.43 875.811C1089.43 911.926 1089 948.048 1089.43 984.163C1089.92 1024.64 1099.78 1064.78 1099.78 1105.36C1099.78 1120.19 1098.67 1135.13 1099.97 1149.95C1100.91 1160.54 1103.23 1152.08 1103.23 1147.32"/>
				<path
					d="M1185.33 15.7118C1185.33 2.31717 1174.98 42.203 1174.98 55.5976C1174.98 74.3242 1179.28 92.8555 1182.26 111.492C1189.03 153.817 1188.78 195.828 1188.78 238.385C1188.78 261.757 1192.85 285.729 1181.88 308.66C1170.24 332.984 1164.48 357.132 1161.18 382.011C1157.71 408.256 1146.61 433.39 1152.75 459.883C1158.46 484.53 1159.78 509.499 1157.54 534.318C1153.73 576.56 1150.83 618.417 1150.83 660.759C1150.83 701.356 1151.08 743.404 1142.4 783.763C1135.91 813.964 1140.48 845.337 1140.48 875.655C1140.48 911.77 1140.05 947.892 1140.48 984.007C1140.97 1024.49 1150.83 1064.63 1150.83 1105.2C1150.83 1120.03 1149.72 1134.97 1151.02 1149.79C1151.96 1160.38 1154.28 1151.93 1154.28 1147.17"/>
				<path
					d="M1236.72 15.7118C1236.72 2.31717 1226.37 42.203 1226.37 55.5976C1226.37 74.3242 1230.67 92.8555 1233.65 111.492C1240.42 153.817 1240.17 195.828 1240.17 238.385C1240.17 261.757 1244.24 285.729 1233.27 308.66C1221.63 332.984 1215.87 357.132 1212.57 382.011C1209.1 408.256 1198 433.39 1204.14 459.883C1209.85 484.53 1211.17 509.499 1208.93 534.318C1205.12 576.56 1202.22 618.417 1202.22 660.759C1202.22 701.356 1202.47 743.404 1193.79 783.763C1187.3 813.964 1191.87 845.337 1191.87 875.655C1191.87 911.77 1191.44 947.892 1191.87 984.007C1192.36 1024.49 1202.22 1064.63 1202.22 1105.2C1202.22 1120.03 1201.11 1134.97 1202.41 1149.79C1203.35 1160.38 1205.67 1151.93 1205.67 1147.17"/>
				<path
					d="M1287.14 15.868C1287.14 2.47342 1276.79 42.3593 1276.79 55.7539C1276.79 74.4804 1281.09 93.0118 1284.07 111.648C1290.84 153.973 1290.59 195.984 1290.59 238.541C1290.59 261.913 1294.66 285.885 1283.69 308.817C1272.05 333.14 1266.29 357.288 1262.99 382.167C1259.52 408.412 1248.42 433.546 1254.56 460.039C1260.27 484.686 1261.59 509.655 1259.35 534.475C1255.54 576.716 1252.64 618.573 1252.64 660.916C1252.64 701.513 1252.89 743.561 1244.21 783.92C1237.72 814.12 1242.29 845.493 1242.29 875.811C1242.29 911.926 1241.86 948.048 1242.29 984.163C1242.78 1024.64 1252.64 1064.78 1252.64 1105.36C1252.64 1120.19 1251.53 1135.13 1252.83 1149.95C1253.77 1160.54 1256.09 1152.08 1256.09 1147.32"/>
				<path
					d="M1338.19 15.7118C1338.19 2.31717 1327.84 42.203 1327.84 55.5976C1327.84 74.3242 1332.14 92.8555 1335.12 111.492C1341.89 153.817 1341.64 195.828 1341.64 238.385C1341.64 261.757 1345.71 285.729 1334.74 308.66C1323.1 332.984 1317.33 357.132 1314.04 382.011C1310.56 408.256 1299.47 433.39 1305.61 459.883C1311.32 484.53 1312.64 509.499 1310.4 534.318C1306.59 576.56 1303.69 618.417 1303.69 660.759C1303.69 701.356 1303.93 743.404 1295.26 783.763C1288.77 813.964 1293.34 845.337 1293.34 875.655C1293.34 911.77 1292.9 947.892 1293.34 984.007C1293.83 1024.49 1303.69 1064.63 1303.69 1105.2C1303.69 1120.03 1302.57 1134.97 1303.88 1149.79C1304.82 1160.38 1307.14 1151.93 1307.14 1147.17"/>
				<path
					d="M216.413 15.868C216.413 2.47342 206.064 42.3593 206.064 55.7539C206.064 74.4804 210.366 93.0118 213.347 111.648C220.115 153.973 219.863 195.984 219.863 238.541C219.863 261.913 223.936 285.885 212.963 308.817C201.324 333.14 195.559 357.288 192.265 382.167C188.789 408.412 177.692 433.546 183.832 460.039C189.544 484.686 190.861 509.655 188.623 534.475C184.814 576.716 181.915 618.573 181.915 660.916C181.915 701.513 182.159 743.561 173.482 783.92C166.99 814.12 171.566 845.493 171.566 875.811C171.566 911.926 171.129 948.048 171.566 984.163C172.056 1024.64 181.915 1064.78 181.915 1105.36C181.915 1120.19 180.798 1135.13 182.107 1149.95C183.042 1160.54 185.365 1152.08 185.365 1147.32"/>
				<path
					d="M164.747 16.8241C164.747 3.42947 154.398 43.3153 154.398 56.7099C154.398 75.4365 158.7 93.9678 161.681 112.604C168.449 154.929 168.197 196.94 168.197 239.498C168.197 262.869 172.27 286.841 161.297 309.773C149.658 334.097 143.893 358.244 140.599 383.123C137.123 409.369 126.026 434.502 132.166 460.995C137.878 485.642 139.195 510.612 136.957 535.431C133.148 577.672 130.249 619.53 130.249 661.872C130.249 702.469 130.493 744.517 121.816 784.876C115.324 815.076 119.9 846.449 119.9 876.767C119.9 912.883 119.463 949.004 119.9 985.119C120.39 1025.6 130.249 1065.74 130.249 1106.31C130.249 1121.14 129.132 1136.08 130.441 1150.9C131.376 1161.5 133.699 1153.04 133.699 1148.28"/>
				<path
					d="M113.081 16.8241C113.081 3.42947 102.732 43.3153 102.732 56.7099C102.732 75.4365 107.034 93.9678 110.015 112.604C116.783 154.929 116.531 196.94 116.531 239.498C116.531 262.869 120.604 286.841 109.631 309.773C97.9924 334.097 92.2275 358.244 88.9325 383.123C85.4566 409.369 74.3595 434.502 80.4997 460.995C86.2122 485.642 87.5291 510.612 85.2911 535.431C81.4821 577.672 78.5832 619.53 78.5832 661.872C78.5832 702.469 78.8266 744.517 70.1504 784.876C63.6581 815.076 68.2339 846.449 68.2339 876.767C68.2339 912.883 67.7965 949.004 68.2339 985.119C68.724 1025.6 78.5832 1065.74 78.5832 1106.31C78.5832 1121.14 77.4665 1136.08 78.7749 1150.9C79.7102 1161.5 82.033 1153.04 82.033 1148.28"/>
				<path
					d="M61.413 16.8241C61.413 3.42947 51.0637 43.3153 51.0637 56.7099C51.0637 75.4365 55.3661 93.9678 58.3466 112.604C65.1155 154.929 64.8628 196.94 64.8628 239.498C64.8628 262.869 68.9357 286.841 57.9633 309.773C46.3245 334.097 40.5595 358.244 37.2646 383.123C33.7886 409.369 22.6915 434.502 28.8318 460.995C34.5442 485.642 35.8611 510.612 33.6231 535.431C29.8141 577.672 26.9152 619.53 26.9152 661.872C26.9152 702.469 27.1586 744.517 18.4824 784.876C11.9902 815.076 16.5659 846.449 16.5659 876.767C16.5659 912.883 16.1286 949.004 16.5659 985.119C17.0561 1025.6 26.9152 1065.74 26.9152 1106.31C26.9152 1121.14 25.7985 1136.08 27.1069 1150.9C28.0422 1161.5 30.365 1153.04 30.365 1148.28"/>
				<path
					d="M267.462 15.7118C267.462 2.31717 257.113 42.203 257.113 55.5976C257.113 74.3242 261.415 92.8555 264.395 111.492C271.164 153.817 270.912 195.828 270.912 238.385C270.912 261.757 274.985 285.729 264.012 308.66C252.373 332.984 246.608 357.132 243.313 382.011C239.837 408.256 228.74 433.39 234.881 459.883C240.593 484.53 241.91 509.499 239.672 534.318C235.863 576.56 232.964 618.417 232.964 660.759C232.964 701.356 233.207 743.404 224.531 783.763C218.039 813.964 222.615 845.337 222.615 875.655C222.615 911.77 222.177 947.892 222.615 984.007C223.105 1024.49 232.964 1064.63 232.964 1105.2C232.964 1120.03 231.847 1134.97 233.156 1149.79C234.091 1160.38 236.414 1151.93 236.414 1147.17"/>
				<path
					d="M318.851 15.7118C318.851 2.31717 308.501 42.203 308.501 55.5976C308.501 74.3242 312.804 92.8555 315.784 111.492C322.553 153.817 322.3 195.828 322.3 238.385C322.3 261.757 326.373 285.729 315.401 308.66C303.762 332.984 297.997 357.132 294.702 382.011C291.226 408.256 280.129 433.39 286.269 459.883C291.982 484.53 293.299 509.499 291.061 534.318C287.252 576.56 284.353 618.417 284.353 660.759C284.353 701.356 284.596 743.404 275.92 783.763C269.428 813.964 274.003 845.337 274.003 875.655C274.003 911.77 273.566 947.892 274.003 984.007C274.494 1024.49 284.353 1064.63 284.353 1105.2C284.353 1120.03 283.236 1134.97 284.544 1149.79C285.48 1160.38 287.803 1151.93 287.803 1147.17"/>
				<path
					d="M369.269 15.868C369.269 2.47342 358.919 42.3593 358.919 55.7539C358.919 74.4804 363.222 93.0118 366.202 111.648C372.971 153.973 372.718 195.984 372.718 238.541C372.718 261.913 376.791 285.885 365.819 308.817C354.18 333.14 348.415 357.288 345.12 382.167C341.644 408.412 330.547 433.546 336.687 460.039C342.4 484.686 343.717 509.655 341.479 534.475C337.67 576.716 334.771 618.573 334.771 660.916C334.771 701.513 335.014 743.561 326.338 783.92C319.846 814.12 324.421 845.493 324.421 875.811C324.421 911.926 323.984 948.048 324.421 984.163C324.912 1024.64 334.771 1064.78 334.771 1105.36C334.771 1120.19 333.654 1135.13 334.962 1149.95C335.898 1160.54 338.22 1152.08 338.22 1147.32"/>
				<path
					d="M420.319 15.7118C420.319 2.31717 409.97 42.203 409.97 55.5976C409.97 74.3242 414.272 92.8555 417.253 111.492C424.022 153.817 423.769 195.828 423.769 238.385C423.769 261.757 427.842 285.729 416.87 308.66C405.231 332.984 399.466 357.132 396.171 382.011C392.695 408.256 381.598 433.39 387.738 459.883C393.45 484.53 394.767 509.499 392.529 534.318C388.72 576.56 385.821 618.417 385.821 660.759C385.821 701.356 386.065 743.404 377.389 783.763C370.896 813.964 375.472 845.337 375.472 875.655C375.472 911.77 375.035 947.892 375.472 984.007C375.962 1024.49 385.821 1064.63 385.821 1105.2C385.821 1120.03 384.705 1134.97 386.013 1149.79C386.948 1160.38 389.271 1151.93 389.271 1147.17"/>
				<path
					d="M471.708 15.7118C471.708 2.31717 461.359 42.203 461.359 55.5976C461.359 74.3242 465.661 92.8555 468.641 111.492C475.41 153.817 475.158 195.828 475.158 238.385C475.158 261.757 479.231 285.729 468.258 308.66C456.619 332.984 450.854 357.132 447.559 382.011C444.084 408.256 432.986 433.39 439.127 459.883C444.839 484.53 446.156 509.499 443.918 534.318C440.109 576.56 437.21 618.417 437.21 660.759C437.21 701.356 437.454 743.404 428.777 783.763C422.285 813.964 426.861 845.337 426.861 875.655C426.861 911.77 426.423 947.892 426.861 984.007C427.351 1024.49 437.21 1064.63 437.21 1105.2C437.21 1120.03 436.093 1134.97 437.402 1149.79C438.337 1160.38 440.66 1151.93 440.66 1147.17"/>
				<path
					d="M523.436 15.868C523.436 2.47342 513.087 42.3593 513.087 55.7539C513.087 74.4804 517.39 93.0118 520.37 111.648C527.139 153.973 526.886 195.984 526.886 238.541C526.886 261.913 530.959 285.885 519.987 308.817C508.348 333.14 502.583 357.288 499.288 382.167C495.812 408.412 484.715 433.546 490.855 460.039C496.568 484.686 497.885 509.655 495.647 534.475C491.838 576.716 488.939 618.573 488.939 660.916C488.939 701.513 489.182 743.561 480.506 783.92C474.014 814.12 478.589 845.493 478.589 875.811C478.589 911.926 478.152 948.048 478.589 984.163C479.079 1024.64 488.939 1064.78 488.939 1105.36C488.939 1120.19 487.822 1135.13 489.13 1149.95C490.066 1160.54 492.388 1152.08 492.388 1147.32"/>
				<path
					d="M574.39 15.7118C574.39 2.31717 564.04 42.203 564.04 55.5976C564.04 74.3242 568.343 92.8555 571.323 111.492C578.092 153.817 577.839 195.828 577.839 238.385C577.839 261.757 581.912 285.729 570.94 308.66C559.301 332.984 553.536 357.132 550.241 382.011C546.765 408.256 535.668 433.39 541.808 459.883C547.521 484.53 548.838 509.499 546.6 534.318C542.791 576.56 539.892 618.417 539.892 660.759C539.892 701.357 540.135 743.405 531.459 783.763C524.967 813.964 529.542 845.337 529.542 875.655C529.542 911.77 529.105 947.892 529.542 984.007C530.033 1024.49 539.892 1064.63 539.892 1105.2C539.892 1120.03 538.775 1134.97 540.083 1149.79C541.019 1160.38 543.342 1151.93 543.342 1147.17"/>
				<path
					d="M625.874 15.7118C625.874 2.31717 615.525 42.203 615.525 55.5976C615.525 74.3242 619.827 92.8555 622.808 111.492C629.576 153.817 629.324 195.828 629.324 238.385C629.324 261.757 633.397 285.729 622.424 308.66C610.785 332.984 605.02 357.132 601.726 382.011C598.25 408.256 587.152 433.39 593.293 459.883C599.005 484.53 600.322 509.499 598.084 534.318C594.275 576.56 591.376 618.417 591.376 660.759C591.376 701.356 591.62 743.404 582.943 783.763C576.451 813.964 581.027 845.337 581.027 875.655C581.027 911.77 580.59 947.892 581.027 984.007C581.517 1024.49 591.376 1064.63 591.376 1105.2C591.376 1120.03 590.259 1134.97 591.568 1149.79C592.503 1160.38 594.826 1151.93 594.826 1147.17"/>
				<path
					d="M676.292 15.868C676.292 2.47342 665.943 42.3593 665.943 55.7539C665.943 74.4804 670.245 93.0118 673.225 111.648C679.994 153.973 679.742 195.984 679.742 238.541C679.742 261.913 683.815 285.885 672.842 308.817C661.203 333.14 655.438 357.288 652.143 382.167C648.668 408.412 637.57 433.546 643.711 460.039C649.423 484.686 650.74 509.655 648.502 534.475C644.693 576.716 641.794 618.573 641.794 660.916C641.794 701.513 642.037 743.561 633.361 783.92C626.869 814.12 631.445 845.493 631.445 875.811C631.445 911.926 631.007 948.048 631.445 984.163C631.935 1024.64 641.794 1064.78 641.794 1105.36C641.794 1120.19 640.677 1135.13 641.986 1149.95C642.921 1160.54 645.244 1152.08 645.244 1147.32"/>
				<path
					d="M727.343 15.7118C727.343 2.31717 716.993 42.203 716.993 55.5976C716.993 74.3242 721.296 92.8555 724.276 111.492C731.045 153.817 730.793 195.828 730.793 238.385C730.793 261.757 734.865 285.729 723.893 308.66C712.254 332.984 706.489 357.132 703.194 382.011C699.718 408.256 688.621 433.39 694.761 459.883C700.474 484.53 701.791 509.499 699.553 534.318C695.744 576.56 692.845 618.417 692.845 660.759C692.845 701.356 693.088 743.404 684.412 783.763C677.92 813.964 682.496 845.337 682.496 875.655C682.496 911.77 682.058 947.892 682.496 984.007C682.986 1024.49 692.845 1064.63 692.845 1105.2C692.845 1120.03 691.728 1134.97 693.037 1149.79C693.972 1160.38 696.295 1151.93 696.295 1147.17"/>
				<path
					d="M828.858 15.868C828.858 2.47342 818.509 42.3593 818.509 55.7539C818.509 74.4804 822.811 93.0118 825.792 111.648C832.561 153.973 832.308 195.984 832.308 238.541C832.308 261.913 836.381 285.885 825.409 308.817C813.77 333.14 808.005 357.288 804.71 382.167C801.234 408.412 790.137 433.546 796.277 460.039C801.99 484.686 803.306 509.655 801.068 534.475C797.259 576.716 794.361 618.573 794.361 660.916C794.361 701.513 794.604 743.561 785.928 783.92C779.435 814.12 784.011 845.493 784.011 875.811C784.011 911.926 783.574 948.048 784.011 984.163C784.501 1024.64 794.361 1064.78 794.361 1105.36C794.361 1120.19 793.244 1135.13 794.552 1149.95C795.488 1160.54 797.81 1152.08 797.81 1147.32"/>
				<path
					d="M879.907 15.7118C879.907 2.31717 869.558 42.203 869.558 55.5976C869.558 74.3242 873.86 92.8555 876.841 111.492C883.61 153.817 883.357 195.828 883.357 238.385C883.357 261.757 887.43 285.729 876.457 308.66C864.819 332.984 859.054 357.132 855.759 382.011C852.283 408.256 841.186 433.39 847.326 459.883C853.038 484.53 854.355 509.499 852.117 534.318C848.308 576.56 845.409 618.417 845.409 660.759C845.409 701.356 845.653 743.404 836.977 783.763C830.484 813.964 835.06 845.337 835.06 875.655C835.06 911.77 834.623 947.892 835.06 984.007C835.55 1024.49 845.409 1064.63 845.409 1105.2C845.409 1120.03 844.293 1134.97 845.601 1149.79C846.536 1160.38 848.859 1151.93 848.859 1147.17"/>
				<path
					d="M931.296 15.7118C931.296 2.31717 920.947 42.203 920.947 55.5976C920.947 74.3242 925.249 92.8555 928.229 111.492C934.998 153.817 934.746 195.828 934.746 238.385C934.746 261.757 938.818 285.729 927.846 308.66C916.207 332.984 910.442 357.132 907.147 382.011C903.671 408.256 892.574 433.39 898.715 459.883C904.427 484.53 905.744 509.499 903.506 534.318C899.697 576.56 896.798 618.417 896.798 660.759C896.798 701.356 897.041 743.404 888.365 783.763C881.873 813.964 886.449 845.337 886.449 875.655C886.449 911.77 886.011 947.892 886.449 984.007C886.939 1024.49 896.798 1064.63 896.798 1105.2C896.798 1120.03 895.681 1134.97 896.99 1149.79C897.925 1160.38 900.248 1151.93 900.248 1147.17"/>
				<path
					d="M981.714 15.868C981.714 2.47342 971.364 42.3593 971.364 55.7539C971.364 74.4804 975.667 93.0118 978.647 111.648C985.416 153.973 985.164 195.984 985.164 238.541C985.164 261.913 989.236 285.885 978.264 308.817C966.625 333.14 960.86 357.288 957.565 382.167C954.089 408.412 942.992 433.546 949.133 460.039C954.845 484.686 956.162 509.655 953.924 534.475C950.115 576.716 947.216 618.573 947.216 660.916C947.216 701.513 947.459 743.561 938.783 783.92C932.291 814.12 936.867 845.493 936.867 875.811C936.867 911.926 936.429 948.048 936.867 984.163C937.357 1024.64 947.216 1064.78 947.216 1105.36C947.216 1120.19 946.099 1135.13 947.408 1149.95C948.343 1160.54 950.666 1152.08 950.666 1147.32"/>
				<path
					d="M1032.76 15.7118C1032.76 2.31717 1022.42 42.203 1022.42 55.5976C1022.42 74.3242 1026.72 92.8555 1029.7 111.492C1036.47 153.817 1036.21 195.828 1036.21 238.385C1036.21 261.757 1040.29 285.729 1029.31 308.66C1017.68 332.984 1011.91 357.132 1008.62 382.011C1005.14 408.256 994.043 433.39 1000.18 459.883C1005.9 484.53 1007.21 509.499 1004.97 534.318C1001.17 576.56 998.267 618.417 998.267 660.759C998.267 701.356 998.51 743.404 989.834 783.763C983.342 813.964 987.917 845.337 987.917 875.655C987.917 911.77 987.48 947.892 987.917 984.007C988.408 1024.49 998.267 1064.63 998.267 1105.2C998.267 1120.03 997.15 1134.97 998.458 1149.79C999.394 1160.38 1001.72 1151.93 1001.72 1147.17"/>
				<path
					d="M1084.15 15.7118C1084.15 2.31717 1073.8 42.203 1073.8 55.5976C1073.8 74.3242 1078.11 92.8555 1081.09 111.492C1087.86 153.817 1087.6 195.828 1087.6 238.385C1087.6 261.757 1091.68 285.729 1080.7 308.66C1069.06 332.984 1063.3 357.132 1060 382.011C1056.53 408.256 1045.43 433.39 1051.57 459.883C1057.28 484.53 1058.6 509.499 1056.36 534.318C1052.55 576.56 1049.66 618.417 1049.66 660.759C1049.66 701.356 1049.9 743.404 1041.22 783.763C1034.73 813.964 1039.31 845.337 1039.31 875.655C1039.31 911.77 1038.87 947.892 1039.31 984.007C1039.8 1024.49 1049.66 1064.63 1049.66 1105.2C1049.66 1120.03 1048.54 1134.97 1049.85 1149.79C1050.78 1160.38 1053.11 1151.93 1053.11 1147.17"/>
				<path
					d="M778.731 15.7118C778.731 2.31717 768.382 42.203 768.382 55.5976C768.382 74.3242 772.684 92.8555 775.665 111.492C782.434 153.817 782.181 195.828 782.181 238.385C782.181 261.757 786.254 285.729 775.282 308.66C763.643 332.984 757.878 357.132 754.583 382.011C751.107 408.256 740.01 433.39 746.15 459.883C751.863 484.53 753.179 509.499 750.941 534.318C747.132 576.56 744.234 618.417 744.234 660.759C744.234 701.356 744.477 743.404 735.801 783.763C729.309 813.964 733.884 845.337 733.884 875.655C733.884 911.77 733.447 947.892 733.884 984.007C734.374 1024.49 744.234 1064.63 744.234 1105.2C744.234 1120.03 743.117 1134.97 744.425 1149.79C745.361 1160.38 747.683 1151.93 747.683 1147.17"/>
			</svg>
		</Wrapper>
	);
}

export default ModalBorder;