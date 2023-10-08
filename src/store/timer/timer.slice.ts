import { createSlice, } from '@reduxjs/toolkit';
import { GAME_DURATION } from '../../constants';
import { store } from '../../index';
import { openModal } from '../pages/pages.slice';

export interface ITimerState {
	isTimeOver: boolean;
	isTimePause: boolean;
}

const initialState: ITimerState = {
	isTimeOver: false,
	isTimePause: true
};

let intervalId: NodeJS.Timeout | null = null;

let TIME = GAME_DURATION;

export const timerSlice = createSlice({
		name: 'timer',
		initialState,
		reducers: {
			initTimer: (state): void => {
				TIME = GAME_DURATION;
			},
			startTimer: (state): void => {
				console.log('start time');
				state.isTimeOver = false;
				state.isTimePause = false;

				intervalId = setInterval(() => {
					TIME -= 1;
					console.log(TIME);
					if (TIME < 0) {
						intervalId && clearInterval(intervalId);
						store.dispatch(setTimeOver());
						store.dispatch(openModal('GAMEOVER_MODAL'))
					}
				}, 1000);

			},
			stopTimer: (state): void => {
				state.isTimePause = true;
				intervalId && clearInterval(intervalId);
			},
			setTimeOver: (state): void => {
				console.log('end');
				state.isTimeOver = true;
				state.isTimePause = true;
			}
		}
	})
;

export const { startTimer, stopTimer, initTimer, setTimeOver } = timerSlice.actions;
export default timerSlice.reducer;