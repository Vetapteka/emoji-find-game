export interface IEmojiListModel {
	yellowList: string[];
	symbolsList: string[];
	eatList: string[];
	greenList: string[];
	sportList: string[];
	thingsList: string[];
}

export type EmojiListKeys = keyof IEmojiListModel;

export interface IEmojiModel {
	code: string;
	svg: string;
}

export type TEmojiList = { [key: string]: string };
