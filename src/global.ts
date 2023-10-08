import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    stroke: ${({ theme }) => theme.stroke};
    stroke-linecap: round;
    stroke-width: 0.4vh;
    background: no-repeat center/cover url(${({ theme }) => require(`./assets/background/background-${theme.prefix}.svg`)});
  }

  body path {
    vector-effect: non-scaling-stroke;
  }

  body,
  body * {
    cursor: url(${({ theme }) => require(`./assets/cursor/pointer-${theme.prefix}.svg`)}), pointer
  }

  body *:active {
    cursor: url(${({ theme }) => require(`./assets/cursor/click-${theme.prefix}.svg`)}), pointer
  }
  
  ::-webkit-scrollbar-thumb {
    background-image: url(${({ theme }) => require(`./assets/scroll/scroll-${theme.prefix}.svg`)});
    background-size: cover;
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 1.5vh;
  }

  ::-webkit-scrollbar-corner {
    background-color: #fff;
  }

  ::-webkit-scrollbar-button {
    background-color: ${({ theme }) => theme.stroke};
  }
`;