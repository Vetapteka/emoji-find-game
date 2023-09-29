export type TPages =
	'GAME_PAGE' |
	'START_PAGE' |
	'THEMES_PAGE' |
	'LEADERBOARD_PAGE'|
	'UNKNOWN';

export type TModals =
	'SETTINGS_MODAL' |
	'PAUSE_MODAL' |
	'UNKNOWN';

export interface IPagesState {
	openedPage: TPages;
	previousPage: TPages;
	isPageBlur: boolean;
	openedModal: TModals;
}