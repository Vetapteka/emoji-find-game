import React from 'react';
import styled from 'styled-components';
import SettingsIcon from './SettingsIcon';
import DiamondIcon from './DiamondIcon';
import CrownIcon from './CrownIcon';
import MoreGamesIcon from './MoreGamesIcon';
import LikeIcon from './LikeIcon';
import LeaderBoardIcon from './LeaderBoardIcon';
import ThemeIcon from './ThemeIcon';
import PlayIcon from './PlayIcon';
import HomeIcon from './HomeIcon';
import PauseIcon from './PauseIcon';
import TimeIcon from './TimeIcon';
import SmileIcon from './SmileIcon';
import BallIcon from './BallIcon';
import HeartIcon from './HeartIcon';
import QuestionIcon from './QuestionIcon';
import PlusIcon from './PlusIcon';
import UpdateIcon from './UpdateIcon';
import ReplayIcon from './ReplayIcon';
import CakeIcon from './CakeIcon';
import GreenIcon from './GreenIcon';
import BackIcon from './BackIcon';
import CheckMarkIcon from './CheckMarkIcon';
import RewardIcon from './RewardIcon';
import PromptIcon from './PromptIcon';

export enum IconSizeEnum {
	XXL = '30vh',
	XL = '23vh',
	L = '15vh',
	M = '10vh',
	S = '6vh',
	XS = '4vh',
}

export type TIcon =
	'BACK_ICON'
	| 'BALL_ICON'
	| 'CHECK_MARK_ICON'
	| 'CROWN_ICON'
	| 'CAKE_ICON'
	| 'DIAMOND_ICON'
	| 'GREEN_ICON'
	| 'HEART_ICON'
	| 'HOME_ICON'
	| 'LEADERBOARD_ICON'
	| 'LIKE_ICON'
	| 'MORE_GAMES_ICON'
	| 'PAUSE_ICON'
	| 'PLUS_ICON'
	| 'PLAY_ICON'
	| 'PROMPT_ICON'
	| 'QUESTION_ICON'
	| 'REPLAY_ICON'
	| 'REWARD_ICON'
	| 'SETTINGS_ICON'
	| 'SMILE_ICON'
	| 'THEME_ICON'
	| 'TIME_ICON'
	| 'UPDATE_ICON'

interface WrapperProps {
	size: string;
}

const Wrapper = styled.div<WrapperProps>`
  width: ${({ size }) => size};
`;

interface IconProps {
	icon: TIcon;
	size: IconSizeEnum | string;
	onClick?: () => void;
	style?: {};
	className?: string
}

function Icon({ size, icon, onClick, ...props }: IconProps) {
	return (
		<Wrapper {...props} onClick={onClick} size={size}>
			{icon === 'BACK_ICON' && <BackIcon/>}
			{icon === 'BALL_ICON' && <BallIcon/>}
			{icon === 'CROWN_ICON' && <CrownIcon/>}
			{icon === 'CAKE_ICON' && <CakeIcon/>}
			{icon === 'CHECK_MARK_ICON' && <CheckMarkIcon/>}
			{icon === 'DIAMOND_ICON' && <DiamondIcon/>}
			{icon === 'GREEN_ICON' && <GreenIcon/>}
			{icon === 'HEART_ICON' && <HeartIcon/>}
			{icon === 'HOME_ICON' && <HomeIcon/>}
			{icon === 'LEADERBOARD_ICON' && <LeaderBoardIcon/>}
			{icon === 'LIKE_ICON' && <LikeIcon/>}
			{icon === 'MORE_GAMES_ICON' && <MoreGamesIcon/>}
			{icon === 'PAUSE_ICON' && <PauseIcon/>}
			{icon === 'PLAY_ICON' && <PlayIcon/>}
			{icon === 'PLUS_ICON' && <PlusIcon/>}
			{icon === 'PROMPT_ICON' && <PromptIcon/>}
			{icon === 'QUESTION_ICON' && <QuestionIcon/>}
			{icon === 'REPLAY_ICON' && <ReplayIcon/>}
			{icon === 'REWARD_ICON' && <RewardIcon/>}
			{icon === 'SETTINGS_ICON' && <SettingsIcon/>}
			{icon === 'SMILE_ICON' && <SmileIcon/>}
			{icon === 'THEME_ICON' && <ThemeIcon/>}
			{icon === 'TIME_ICON' && <TimeIcon/>}
			{icon === 'UPDATE_ICON' && <UpdateIcon/>}
		</Wrapper>
	);
}

export default Icon;