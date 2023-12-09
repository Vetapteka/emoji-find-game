import React, { JSX, useState } from 'react';
import { TStateSetter } from '../../types';
import styled from 'styled-components';

const Input = styled.input`
  width: 25vh;
  height: 4vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 70%;
    border: 0.4vh solid ${({ theme }) => theme.stroke};
    border-radius: 1vh;
    background: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    width: 2.5vh;
    height: 5vh;
    background-color: ${({ theme }) => theme.stroke};
    border-radius: 1vh;
    margin-top: -1.25vh;
  }
`;

interface RangeControlProps {
	initValue: number;
	callBack: (value: number) => void;
}

function RangeControl({ callBack, initValue }: RangeControlProps): JSX.Element {
	const [value, setValue]: [number, TStateSetter<number>] = useState(initValue);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value: number = parseFloat(event.target.value);
		setValue(value);
		callBack(value);
	};

	return (
		<Input type="range" min="0" max="1" step="0.1" value={value} onChange={handleChange}/>
	);
};

export default RangeControl;