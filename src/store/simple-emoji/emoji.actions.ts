import axios, { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IEmojiModel } from './emoji.model';

const BASE_URL = 'https://raw.githubusercontent.com/googlefonts/noto-emoji/main/svg/';

export const getSimpleEmoji = createAsyncThunk(
	'simpleEmoji/get',
	async (code: string): Promise<IEmojiModel> => {
		const url: string = `${BASE_URL}emoji_u${code.split('-').filter((x: string): boolean => x !== 'fe0f').join('_')}.svg`;

		const response: AxiosResponse<string, IEmojiModel> = await axios.get<string>(url);
		return { code, svg: response.data };
	}
);