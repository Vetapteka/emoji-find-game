export enum PagesEnum {
	GAME_PAGE = 'GamePage',
	START_PAGE = 'StartPage',
	THEMES_PAGE = 'ThemesPage',
	LEADERBOARD_PAGE = 'LeadBoardPage'
}

export enum ModalEnum {
	SETTINGS_MODAL = 'SettingsModal',
	PAUSE_MODAL = 'PauseModal',
	UNKNOWN = 'Unknown'
}

export interface IPagesState {
	openedPage: PagesEnum;
	isPageBlur: boolean;
	openedModal: ModalEnum;
}