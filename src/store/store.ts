import { combineReducers, configureStore } from '@reduxjs/toolkit';
import simpleEmojiReducer from './simple-emoji/simpleEmoji.sllice';

export const rootReducer = combineReducers({
	simpleEmojiReducer
});


export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});

};


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']