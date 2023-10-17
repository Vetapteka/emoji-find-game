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
	'PROMPT_MODAL' |
	'GAMEOVER_MODAL' |
	'UNKNOWN';

export interface IOpenedModal{
	type: TModals,
	props?: any,
}

export interface IPagesState {
	openedPage: TPages;
	previousPage: TPages;
	openedModal: TModals;
	previousModal: TModals;
	modalProps: any;
}