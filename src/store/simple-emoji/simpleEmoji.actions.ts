import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISimpleEmojiModel } from './simpleEmoji.model';

const BASE_URL = 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/';

export const getSimpleEmoji = createAsyncThunk(
	'simpleEmoji/get',
	async (code: string): Promise<ISimpleEmojiModel> => {
		const url: string = `${BASE_URL}emoji_u${code.split('-').filter((x: string): boolean => x !== 'fe0f').join('_')}.svg`;

		const response: AxiosResponse<string, ISimpleEmojiModel> = await axios.get<string>(url);
		return { code, svg: response.data };
	}
);