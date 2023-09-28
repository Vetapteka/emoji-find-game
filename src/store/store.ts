import { combineReducers, configureStore } from '@reduxjs/toolkit';
import emojiReducer from './emoji/emoji.sllice';
import emojiMapperReducer from './emoji-mapper/emojiMapper.slice';
import timeReducer from './timer/timer.slice';

export const rootReducer = combineReducers({
	emojiReducer,
	emojiMapperReducer,
	timeReducer
});


export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});

};


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']