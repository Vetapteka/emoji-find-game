import { combineReducers, configureStore } from '@reduxjs/toolkit';
import emojiMapperReducer from './emoji-mapper/emojiMapper.slice';
import timeReducer from './timer/timer.slice';
import pagesReducer from './pages/pages.slice';
import userReducer from './user/user.slice';
import themeReducer from './theme/theme.slice';

export const rootReducer = combineReducers({
	emojiMapperReducer,
	timeReducer,
	pagesReducer,
	userReducer,
	themeReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	});

};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']