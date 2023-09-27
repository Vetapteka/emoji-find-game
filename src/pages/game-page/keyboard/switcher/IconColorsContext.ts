import { TStateSetter } from '../../../../types';
import { Context, createContext } from 'react';
import { ICON_ACTIVE_COLOR, ICON_DEFAULT_COLOR } from './iconUtils';

export interface IIconColors {
	AVOCADO_ICON: string,
	BALL_ICON: string;
	BANT_ICON: string;
	BAG_ICON: string;
	HEART_ICON: string;
	SMILE_ICON: string;
}

export const initIconColorsState: IIconColors = {
	AVOCADO_ICON : ICON_DEFAULT_COLOR,
	BALL_ICON : ICON_DEFAULT_COLOR,
	BANT_ICON : ICON_DEFAULT_COLOR,
	BAG_ICON : ICON_DEFAULT_COLOR,
	HEART_ICON : ICON_DEFAULT_COLOR,
	SMILE_ICON : ICON_ACTIVE_COLOR
};

export type TIconColorsContext = [IIconColors, TStateSetter<IIconColors>];

export const IconColorsContext: Context<TIconColorsContext> = createContext<TIconColorsContext>([initIconColorsState, () => {
}]);