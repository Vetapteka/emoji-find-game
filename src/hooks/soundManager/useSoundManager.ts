import { useContext } from 'react';
import { Howl } from 'howler';
import { SoundsContext, TAvailableSound, TSounds } from './SoundContext';

export interface SoundManager {
	playSound: (soundId: TAvailableSound) => void;
	setVolumeForSounds: (volume: number) => void;
	setVolumeForMusic: (volume: number) => void;
	stopSound: (soundId: TAvailableSound) => void;
	stopAllSounds: () => void;
	getSoundVolume: () => number;
	getMusicVolume: () => number;
};

const useSoundManager = (): SoundManager => {
	const sounds: TSounds = useContext(SoundsContext);

	const playSound = (soundId: TAvailableSound): void => {
		const sound: Howl = sounds[soundId];
		if (sound && !sound.playing()) {
			sound.play();
		}
	};

	const stopSound = (soundId: TAvailableSound): void => {
		if (sounds[soundId]) {
			sounds[soundId].stop();
		}
	};

	const stopAllSounds = (): void => {
		Object.values(sounds).forEach((sound: Howl): void => {
			sound.stop();
		});
	};

	const setVolumeForMusic = (volume: number): void => {
		sounds.background_music.volume(volume);
	};

	const setVolumeForSounds = (volume: number): void => {
		Object.entries(sounds).forEach(([key, sound]: [string, Howl]): void => {
			if (key !== 'background_music')
				sound.volume(volume);
		});
		sounds.ui_click_sound.play();
	};

	const getSoundVolume = (): number => {
		return sounds.ui_click_sound.volume();
	};

	const getMusicVolume = (): number => {
		return sounds.background_music.volume();
	};

	return {
		playSound,
		stopSound,
		stopAllSounds,
		setVolumeForSounds,
		setVolumeForMusic,
		getSoundVolume,
		getMusicVolume
	};
};

export default useSoundManager;