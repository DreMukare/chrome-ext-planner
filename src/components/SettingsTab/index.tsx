import rootStore from '../../stores/RootStore';
import AccountTab from './AccountTab';
import ProfileTab from './ProfileTab';
import UserSettingsTab from './UserSettingsTab';

const SettingsTab = (props: { title: JSX.Element }) => {
	const { title: Title } = props;

	let activeTab;

	if (rootStore.uiStore.activeSettingsTab === 'settings')
		activeTab = <UserSettingsTab />;

	if (rootStore.uiStore.activeSettingsTab === 'profile')
		activeTab = <ProfileTab />;

	if (rootStore.uiStore.activeSettingsTab === 'account')
		activeTab = <AccountTab />;

	return (
		<div>
			{Title}
			{activeTab}
		</div>
	);
};

export default SettingsTab;
