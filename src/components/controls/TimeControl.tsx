import React, { JSX } from 'react';
import PenBorder from '../borders/PenBorder';
import { IconSizeEnum } from '../icons/Icon';

function TimeControl(): JSX.Element {
	return (
		<PenBorder height={IconSizeEnum.XS} width={'100%'}>
			<div></div>
		</PenBorder>
	);
}

export default TimeControl;