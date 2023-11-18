import { useContext, useEffect } from 'react';
import { Howl } from 'howler';
import { SoundsContext, TAvailableSound, TSounds } from './SoundContext';

interface SoundManager {
	playSound: (soundId: TAvailableSound) => void;
	decreaseVolume: (volume: number) => void;
	stopSound: (soundId: TAvailableSound) => void;
	stopAllSounds: () => void;
};

const useSoundManager = (): SoundManager => {
	const sounds: TSounds = useContext(SoundsContext);

	const playSound = (soundId: TAvailableSound): void => {
		if (sounds[soundId]) {
			sounds[soundId].play();
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

	const decreaseVolume = (volume: number): void => {
		Object.values(sounds).forEach((sound: Howl): void => {
			sound.volume(sound.volume() - volume);
		});
	};

	useEffect(() => {
		return (): void => {
			stopAllSounds();
		};
	}, []);

	return {decreaseVolume, playSound, stopSound, stopAllSounds };
};

export default useSoundManager;