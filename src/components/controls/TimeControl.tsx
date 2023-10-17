import React, { JSX, useEffect, useState } from 'react';
import PenBorder from '../borders/PenBorder';
import { IconSizeEnum } from '../icons/Icon';
import TimeDash from '../TimeDash';
import { TStateSetter } from '../../types';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { ITimerState } from '../../store/timer/timer.slice';
import { nanoid } from 'nanoid';
import { GAME_DURATION } from '../../constants';

function TimeControl(): JSX.Element {
	const { time }: ITimerState = useAppSelector((state: RootState) => state.timeReducer);
	const [timeDashes, setTimeDashes]: [JSX.Element[], TStateSetter<JSX.Element[]>] = useState<JSX.Element[]>([]);

	useEffect((): void => {
		const timeDashesCount: number = GAME_DURATION - time;

		if (timeDashes.length >= timeDashesCount) {
			setTimeDashes([]);
		} else if (timeDashes.length < timeDashesCount - 1) {
			const newTimeDash: JSX.Element[] = Array.from({ length: timeDashesCount }, () => (
				<TimeDash key={nanoid()}/>
			));
			setTimeDashes(newTimeDash);
		} else {
			const newTimeDash: JSX.Element = <TimeDash key={nanoid()}/>;
			setTimeDashes((prevDivs: JSX.Element[]) => [...prevDivs, newTimeDash]);
		}

	}, [time]);

	return (
		<PenBorder height={IconSizeEnum.XS} width={'100%'}>
			<div className="timeDashContainer">
				{timeDashes}
			</div>
		</PenBorder>
	);
}

export default TimeControl;