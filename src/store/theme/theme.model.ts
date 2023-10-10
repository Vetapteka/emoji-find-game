export interface ITheme {
	stroke: string,
	prefix: string,
	prise: number | 'reward' | null,
	isSelected: boolean,
	index: number,
}

export interface IThemeState {
	currentTheme: ITheme;
	availableThemes: ITheme[];
}

export const THEMES: ITheme[] = [
	{ stroke: '#71A7FC', prefix: 'blue', prise: 0, isSelected: true, index: 0 },
	{ stroke: '#F2A8A8', prefix: 'pink', prise: 0, isSelected: false, index: 1 },
	{ stroke: '#DD638F', prefix: 'magenta', prise: 0, isSelected: false, index: 2 },
	{ stroke: '#09234B', prefix: 'black', prise: 0, isSelected: false, index: 3 },
	{ stroke: '#FFC907', prefix: 'yellow', prise: 0, isSelected: false, index: 4 },
	{ stroke: '#A5BE15', prefix: 'green', prise: 0, isSelected: false, index: 5 },
	{ stroke: '#866666', prefix: 'brown', prise: 0, isSelected: false, index: 6 },
	{ stroke: '#52575E', prefix: 'dark', prise: 0, isSelected: false, index: 7 },
	{ stroke: '#EE3B14', prefix: 'red', prise: 0, isSelected: false, index: 8 },
	{ stroke: '#A463C3', prefix: 'violet', prise: 0, isSelected: false, index: 9 },
];