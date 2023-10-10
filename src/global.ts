import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    stroke: ${({ theme }) => theme.stroke};
    stroke-linecap: round;
    stroke-width: 0.4vh;
    background: no-repeat center/cover url(${({ theme }) => require(`./assets/themes/${theme.prefix}/background.svg`)});
  }

  body path {
    vector-effect: non-scaling-stroke;
  }

  body,
  body * {
    cursor: url(${({ theme }) => require(`./assets/themes/${theme.prefix}/pointer.svg`)}), pointer
  }

  body *:active {
    cursor: url(${({ theme }) => require(`./assets/themes/${theme.prefix}/click.svg`)}), pointer
  }
  
  ::-webkit-scrollbar-thumb {
    background-image: url(${({ theme }) => require(`./assets/themes/${theme.prefix}/scroll.svg`)});
    background-size: cover;
    border-radius: 5px;
  }

  ::-webkit-scrollbar {
    width: 1.5vh;
  }

  ::-webkit-scrollbar-corner {
    background-color: unset;
  }

  ::-webkit-scrollbar-button {
    background-color: ${({ theme }) => theme.stroke};
  }
`;