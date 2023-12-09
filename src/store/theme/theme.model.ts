export interface ITheme {
	stroke: string,
	prefix: string,
	price: number | 'reward' | null,
	index: number,
	background_color?: string
}

export interface IThemeState {
	currentTheme: ITheme;
	availableThemes: ITheme[];
}
