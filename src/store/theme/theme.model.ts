export interface ITheme {
	stroke: string,
	prefix: string,
	price: number | 'reward' | null,
	index: number,
}

export interface IThemeState {
	currentTheme: ITheme;
	availableThemes: ITheme[];
}
