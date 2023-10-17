import { createSlice, } from '@reduxjs/toolkit';
import { GAME_DURATION } from '../../constants';
import { store } from '../../index';
import { openModal } from '../pages/pages.slice';

export interface ITimerState {
	time: number;
	isTimeOver: boolean;
	isTimePause: boolean;
}

const initialState: ITimerState = {
	time: 0,
	isTimeOver: false,
	isTimePause: true
};

let intervalId: NodeJS.Timeout | null = null;

let TIME = 0;

export const timerSlice = createSlice({
		name: 'timer',
		initialState,
		reducers: {
			initTimer: (state): void => {
				state.time = GAME_DURATION;
				TIME = GAME_DURATION;
				console.log('init timer')
			},
			startTimer: (state): void => {
				console.log('start time');
				state.isTimeOver = false;
				state.isTimePause = false;

				intervalId = setInterval((): void => {
					store.dispatch(decrementTime());
					if (TIME < 0) {
						intervalId && clearInterval(intervalId);
						store.dispatch(setTimeOver());
						store.dispatch(openModal({type: 'GAMEOVER_MODAL'}));
					}
				}, 1000);

			},
			decrementTime: (state): void => {
				state.time -= 1;
				TIME -= 1;
				console.log(state.time);
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

export const { startTimer, stopTimer, decrementTime, initTimer, setTimeOver } = timerSlice.actions;
export default timerSlice.reducer;