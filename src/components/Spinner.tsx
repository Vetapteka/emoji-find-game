import React, { JSX } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #71A7FC;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite; 
`;

function Spinner(): JSX.Element {
	return (
		<Wrapper/>
	);
}

export default Spinner;