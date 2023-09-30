import { createSlice, } from '@reduxjs/toolkit';

export interface ITimerState {
	isTimeOver: boolean;
	isTimePause: boolean;
}

const initialState: ITimerState = {
	isTimeOver: false,
	isTimePause: false
};

let intervalId: NodeJS.Timeout | null = null;

let TIME = 100

export const timerSlice = createSlice({
		name: 'timer',
		initialState,
		reducers: {
			initTimer: (state): void => {
				TIME = 100;
			},
			startTimer: (state): void => {
				console.log('start time');
				state.isTimeOver = false;
				state.isTimePause = false;

				intervalId = setInterval(() => {
					TIME -= 1;
					console.log(TIME);
					if (TIME <= 0) {
						state.isTimeOver = true;
						intervalId && clearInterval(intervalId);
					}
				}, 1000);

			},
			stopTimer: (state): void => {
				state.isTimePause = true;
				intervalId && clearInterval(intervalId);
			},
		}
	})
;

export const { startTimer, stopTimer, initTimer } = timerSlice.actions;
export default timerSlice.reducer;