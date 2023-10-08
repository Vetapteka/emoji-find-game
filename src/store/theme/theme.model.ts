export interface ITheme {
	stroke: string,
	prefix: string,
}

export interface IThemeState {
	theme: ITheme;
}

export const THEMES: ITheme[] = [
	{ stroke: '#71A7FC', prefix: 'blue' }
];