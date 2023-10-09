import { observable } from 'mobx';
import IconButton from '../IconButton';
import rootStore from '../../stores/RootStore';
import { FaCog } from 'react-icons/fa';
import SettingsTab from '../SettingsTab';

const iconStyle = {};

const Settings = () => {
	const handleClick = () => {
		rootStore.uiStore.setShowSettingsContainer(
			!rootStore.uiStore.showSettingsContainer
		);
	};

	return (
		<div>
			{rootStore.uiStore.showSettingsContainer && <SettingsTab />}
			<IconButton
				onClick={handleClick}
				name='settingsToggle'
				icon={FaCog}
				iconStyle={iconStyle}
			/>
		</div>
	);
};

export default observable(Settings);
