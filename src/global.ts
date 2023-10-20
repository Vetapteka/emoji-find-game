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
    cursor: url(${({ theme }) => require(`./assets/themes/${theme.prefix}/pointer.svg`)}), pointer;
    transition: transform 0.3s;
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

  @keyframes upDownAnimation {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1vh);
    }
  }

  .a-hover-up:hover {
    transform: translateY(-0.8vh);
  }

  .a-hover-up-down:hover, .a-up-down {
    animation: upDownAnimation 0.8s infinite;
  }


  .a-pulse {
    @keyframes pulseAnimation {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    animation: pulseAnimation 2s infinite;
  }
  
  .a-appear{

    animation: appearAnimation 0.5s ease-out forwards;

    @keyframes appearAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  /* This fires as soon as the element enters the DOM*/
  .list-transition-enter {
    /*We give the list the initial dimension of the list button*/
    top: 0;
    width: 120px;
    max-height: 40px;
    color: transparent;
    background-color: #5a564c;
  }
  /* This is where we can add the transition*/
  .list-transition-enter-active {
    top: 45px;
    width: 200px;
    max-height: 200px;
    background-color: #9e8949;
    transition: all 400ms;
  }
  /* This fires as soon as the this.state.showList is false */
  .list-transition-exit {
    top: 45px;
    width: 200px;
    max-height: 200px;
    background-color: #9e8949;
  }
  /* fires as element leaves the DOM*/
  .list-transition-exit-active {
    top: 0;
    width: 120px;
    max-height: 40px;
    color: transparent;
    background-color: #5a564c;
    transition: all 400ms;
  }
  
`;