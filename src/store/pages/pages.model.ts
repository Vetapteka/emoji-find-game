export type TPages =
	'GAME_PAGE' |
	'START_PAGE' |
	'THEMES_PAGE' |
	'LEADERBOARD_PAGE' |
	'UNKNOWN';

export type TModals =
	'SETTINGS_MODAL' |
	'PAUSE_MODAL' |
	'COUNTDOWN_MODAL' |
	'UPDATE_EMOJI_MODAL' |
	'GAMEOVER_MODAL' |
	'UNKNOWN';

export interface IPagesState {
	openedPage: TPages;
	previousPage: TPages;
	openedModal: TModals;
	previousModal: TModals;
}