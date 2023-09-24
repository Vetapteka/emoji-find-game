export interface ISimpleEmojiListModel {
	yellowList: string[];
	symbolsList: string[];
	eatList: string[];
	greenList: string[];
	sportList: string[];
	thingsList: string[];
}

export type EmojiListKeys = keyof ISimpleEmojiListModel;

export interface ISimpleEmojiModel {
	code: string;
	svg: string;
}

export type TEmojiList = { [key: string]: string };
