export interface IEmojiListModel {
	yellowList: string[];
	symbolsList: string[];
	eatList: string[];
	greenList: string[];
	thingsList: string[];
}

export type TEmojiListKeys = keyof IEmojiListModel;

export interface IEmojiModel {
	code: string;
	svg: string;
}

export type TEmojiList = { [key: string]: string };
