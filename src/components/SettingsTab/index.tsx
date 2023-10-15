import { observer } from 'mobx-react';
import rootStore from '../../stores/RootStore';
import SettingsTabButtonRow from '../SettingsTabButtonRow';
import InnerTab from './InnerTab';
import TabBody from './TabBody';
import MainSettings from './MainSettings';
import Profile from './Profile';

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
				children={
					<TabBody>
						<InnerTab
							title='Settings'
							titleSectionStyle={titleSectionStyle}
							tabContainerStyle={tabContainerStyle}
						>
							<MainSettings />
						</InnerTab>
					</TabBody>
				}
			/>
		);

	if (rootStore.uiStore.activeSettingsTab === 'profile')
		activeTab = (
			<InnerTab
				tabContainerStyle={tabContainerStyle}
				title='Profile'
				titleSectionStyle={titleSectionStyle}
				children={
					<TabBody>
						<InnerTab
							title='Profile'
							titleSectionStyle={titleSectionStyle}
							tabContainerStyle={tabContainerStyle}
						>
							<Profile />
						</InnerTab>
					</TabBody>
				}
			/>
		);

	// if (rootStore.uiStore.activeSettingsTab === 'account')
	// 	activeTab = (
	// 		<InnerTab
	// 			tabContainerStyle={tabContainerStyle}
	// 			title='Account'
	// 			titleSectionStyle={titleSectionStyle}
	// 			children={<TabBody></TabBody>}
	// 		/>
	// 	);

	return (
		<div>
			<SettingsTabButtonRow />
			{activeTab}
		</div>
	);
};

export default observer(SettingsTab);
