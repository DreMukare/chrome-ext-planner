import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import AccountTab from './AccountTab';
import ProfileTab from './ProfileTab';
import UserSettingsTab from './UserSettingsTab';
import SettingsTabButtonRow from '../SettingsTabButtonRow';

const tabContainerStyle =
	'ml-[20px] w-[361px] h-[484] rounded-[20px] bg-[#FEFAFA]';

const SettingsTab = () => {
	let activeTab;

	if (rootStore.uiStore.activeSettingsTab === 'settings')
		activeTab = <UserSettingsTab tabContainerStyle={tabContainerStyle} />;

	if (rootStore.uiStore.activeSettingsTab === 'profile')
		activeTab = <ProfileTab tabContainerStyle={tabContainerStyle} />;

	if (rootStore.uiStore.activeSettingsTab === 'account')
		activeTab = <AccountTab tabContainerStyle={tabContainerStyle} />;

	return (
		<div>
			<SettingsTabButtonRow />
			{activeTab}
		</div>
	);
};

export default observer(SettingsTab);
