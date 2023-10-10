import React from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';

function RewardVideoControl(props: any): JSX.Element {
	return (
		<Icon {...props} icon="REWARD_ICON" size={IconSizeEnum.M}/>
	);
}

export default RewardVideoControl;