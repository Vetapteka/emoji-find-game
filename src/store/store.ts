import { combineReducers, configureStore } from '@reduxjs/toolkit';
import simpleEmojiReducer from './simple-emoji/emoji.sllice';
import emojiMapperReducer from './emoji-mapper/emojiMapper.slice';

export const rootReducer = combineReducers({
	simpleEmojiReducer,
	emojiMapperReducer
});


export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});

};


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']