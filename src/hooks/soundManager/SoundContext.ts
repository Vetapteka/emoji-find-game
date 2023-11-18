import { createContext } from 'react';
import { Howl } from 'howler';

// @ts-ignore
import smileChooseSound from '../../assets/sounds/smile_choose_sound.mp3';
// @ts-ignore
import timerEndingSound from '../../assets/sounds/timer_ending_sound.mp3';
// @ts-ignore
import timerEndSound from '../../assets/sounds/timer_end_sound.mp3';
// @ts-ignore
import endGameSound from '../../assets/sounds/end_game_sound.mp3';
// @ts-ignore
import clickUiSound from '../../assets/sounds/click_ui_sound.mp3';
// @ts-ignore
import backgroundMusic from '../../assets/sounds/background_music.mp3';

export interface ISound {
	id: string,
	url: string
}

export type TAvailableSound =
	'smile_choose_sound'
	| 'timer_ending_sound'
	| 'end_game_sound'
	| 'click_ui_sound'
	| 'background_music'
	| 'timer_end_sound';

export type TSounds = { [key in TAvailableSound]: Howl };

const soundUrls: Record<TAvailableSound, string> = {
	smile_choose_sound: smileChooseSound,
	timer_ending_sound: timerEndingSound,
	timer_end_sound: timerEndSound,
	end_game_sound: endGameSound,
	click_ui_sound: clickUiSound,
	background_music: backgroundMusic,
};

export const getSounds = (): TSounds => {
	const loadedSounds: TSounds = {} as TSounds;

	Object.entries(soundUrls).forEach(([key, url]): void => {
		loadedSounds[key as TAvailableSound] = new Howl({
			src: [url],
		});
	});

	return loadedSounds;
};

export const SoundsContext = createContext(getSounds());