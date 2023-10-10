import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import SettingsTabButtonRow from '../SettingsTabButtonRow';
import InnerTab from './InnerTab';

const tabContainerStyle =
	'ml-[20px] w-[361px] h-[484] rounded-[20px] bg-[#FEFAFA]';
const titleSectionStyle = {
	color: '#000000',
	textAlign: 'center',
	marginTop: '26px',
	paddingBottom: '13px',
};

const SettingsTab = () => {
	let activeTab;

	if (rootStore.uiStore.activeSettingsTab === 'settings')
		activeTab = (
			<InnerTab
				tabContainerStyle={tabContainerStyle}
				title='Settings'
				titleSectionStyle={titleSectionStyle}
			/>
		);

	if (rootStore.uiStore.activeSettingsTab === 'profile')
		activeTab = (
			<InnerTab
				tabContainerStyle={tabContainerStyle}
				title='Profile'
				titleSectionStyle={titleSectionStyle}
			/>
		);

	if (rootStore.uiStore.activeSettingsTab === 'account')
		activeTab = (
			<InnerTab
				tabContainerStyle={tabContainerStyle}
				title='Account'
				titleSectionStyle={titleSectionStyle}
			/>
		);

	return (
		<div>
			<SettingsTabButtonRow />
			{activeTab}
		</div>
	);
};

export default observer(SettingsTab);
