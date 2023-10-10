import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import AccountTab from './AccountTab';
import ProfileTab from './ProfileTab';
import UserSettingsTab from './UserSettingsTab';
import SettingsTabButtonRow from '../SettingsTabButtonRow';

const SettingsTab = () => {
	let activeTab;

	if (rootStore.uiStore.activeSettingsTab === 'settings')
		activeTab = <UserSettingsTab />;

	if (rootStore.uiStore.activeSettingsTab === 'profile')
		activeTab = <ProfileTab />;

	if (rootStore.uiStore.activeSettingsTab === 'account')
		activeTab = <AccountTab />;

	return (
		<div>
			<SettingsTabButtonRow />
			{activeTab}
		</div>
	);
};

export default observer(SettingsTab);
