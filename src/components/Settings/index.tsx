import { observable } from 'mobx';
import IconButton from '../IconButton';
import rootStore from '../../stores/RootStore';
import SettingsTab from '../SettingsTab';
import screw from '../../assets/btnimages/screw.svg';

const imgStyle = {
	margin: '13px',
	width: '19px',
	height: '19px',
};

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
				image={screw}
				imgStyle={imgStyle}
				imageAltText='Toggle settings view on and off'
			/>
		</div>
	);
};

export default observable(Settings);
