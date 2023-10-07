import React, { JSX, useEffect, useState } from 'react';
import { AppDispatch } from '../store/store';
import { useAppDispatch } from '../hooks/redux';
import { TStateSetter } from '../types';
import { COUNTDOWN_TIME_VALUE } from '../constants';
import { IconSizeEnum } from '../components/icons/Icon';
import { closeModal } from '../store/pages/pages.slice';
import DigitProvider from '../components/digits/DigitProvider';
import { initTimer, startTimer } from '../store/timer/timer.slice';
import { ModalBackgroundContainer } from '../components/style/ModalBackgroundContainer';

function CountdownModal(): JSX.Element {
	const [countdown, setCountdown]: [number, TStateSetter<number>] = useState(COUNTDOWN_TIME_VALUE);
	const dispatch: AppDispatch = useAppDispatch();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (countdown > 1) {
				setCountdown(countdown - 1);
			} else {
				dispatch(initTimer());
				dispatch(startTimer());
				dispatch(closeModal());
				clearTimeout(timer);
			}
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [countdown]);

	return (
		<ModalBackgroundContainer>
			<DigitProvider key={countdown} n={countdown} isBold={true} isAnimated={true} size={IconSizeEnum.XXL}/>
		</ModalBackgroundContainer>
	);
}

export default CountdownModal;