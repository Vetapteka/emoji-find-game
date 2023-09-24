import styled from 'styled-components';
// @ts-ignore
import icon_background from '../../../../assets/icon_background.svg';

export interface IconProps {
	onClick: () => void;
	color: string;
}

export interface IconContainerProps {
	isActive: boolean;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 100%;
  height: 100%;
  ${({ isActive }: IconContainerProps) =>
          isActive && `background:  no-repeat center/cover url("${icon_background}");`
  }
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & > * {
	height: 70%;
	width: 100%;
  }
`;

export const ICON_DEFAULT_COLOR = '#71A7FC';
export const ICON_ACTIVE_COLOR = 'white';

export const ICON_STROKE_WIDTH = '1.7vh';