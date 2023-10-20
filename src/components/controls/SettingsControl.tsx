import React, { JSX } from 'react';
import Icon, { IconSizeEnum } from '../icons/Icon';

function SettingsControl(): JSX.Element {
	return (
		<Icon className="a-hover-up" icon="SETTINGS_ICON" size={IconSizeEnum.S}/>
	);
}

export default SettingsControl;