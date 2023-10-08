import React, { JSX, useEffect, useState } from 'react';
import PenBorder from '../borders/PenBorder';
import { IconSizeEnum } from '../icons/Icon';
import TimeDash from '../TimeDash';
import { TStateSetter } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { ITimerState } from '../../store/timer/timer.slice';
import { TIME_DASH_INTERVAL } from '../../constants';
import { nanoid } from 'nanoid';

function TimeControl(): JSX.Element {
	const { isTimePause, isTimeOver }: ITimerState = useAppSelector((state: RootState) => state.timeReducer);
	const [timeDashes, setTimeDashes]: [JSX.Element[], TStateSetter<JSX.Element[]>] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const intervalId = setInterval((): void => {
			if (!isTimePause) {
				const newTimeDash: JSX.Element = <TimeDash key={nanoid()}/>;
				setTimeDashes((prevDivs: JSX.Element[]) => [...prevDivs, newTimeDash]);
			}

			if (isTimeOver) {
				clearInterval(intervalId);
			}

		}, TIME_DASH_INTERVAL * 1000);


		return () => clearInterval(intervalId);
	}, [isTimePause]);

	return (
		<PenBorder height={IconSizeEnum.XS} width={'100%'}>
			<div className="timeDashContainer">
				{timeDashes}
			</div>
		</PenBorder>
	);
}

export default TimeControl;