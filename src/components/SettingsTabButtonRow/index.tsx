import { observer } from 'mobx-react';
import IconButton from '../IconButton';
import rootStore from '../../stores/RootStore';
import smile from '../../assets/btnimages/smile.png';
import coloredSmile from '../../assets/btnimages/coloredSmile.png';
import settingsImg from '../../assets/btnimages/settings.png';
import hands from '../../assets/btnimages/hands.png';
import HorizontalDivider from '../HorizontalDivider';

const commonButtonStyle = {
	width: '122px',
	height: '52px',
};
const activeTabStyle = {
	boxShadow: '0px 3px 6px #FFBFBF',
	border: '0.5px solid #FFBFBF',
	borderRadius: '20px 20px 3px 3px',
	background: '#FFEFEF 0% 0% no-repeat padding-box',
};
const imgStyle = {
	width: '19px',
	height: '19px',
};

const SettingsTabButtonRow = () => {
	const activeTab = rootStore.uiStore.activeSettingsTab;
	const isProfile = activeTab === 'profile';
	const isAccount = activeTab === 'account';
	const isSettings = activeTab === 'settings';

	const changeSettingsTab = (tab: string) => {
		rootStore.uiStore.setActiveSettingsTab(tab);
	};

	// Andrew: styles for horizontal divider
	//border-b-1 border-solid border-[rgba(0, 0, 0, 0.15)]

	return (
		<div>
			<div className='w-100 flex justify-around items-center '>
				<>
					{/* settings */}
					<IconButton
						name='Settings Tab Button'
						onClick={() => changeSettingsTab('settings')}
						btnStyle={
							isSettings
								? { ...commonButtonStyle, ...activeTabStyle }
								: { ...commonButtonStyle }
						}
						image={settingsImg}
						imgStyle={imgStyle}
						imageAltText='Change to settings tab'
					/>

					{/* profile */}
					<IconButton
						name='Profile Tab Button'
						onClick={() => changeSettingsTab('profile')}
						btnStyle={
							isProfile
								? { ...commonButtonStyle, ...activeTabStyle }
								: { ...commonButtonStyle }
						}
						image={isProfile ? coloredSmile : smile}
						imgStyle={imgStyle}
						imageAltText='Change to profile tab'
					/>

					{/* account */}
					<IconButton
						name='Account Tab Button'
						onClick={() => changeSettingsTab('account')}
						btnStyle={
							isAccount
								? { ...commonButtonStyle, ...activeTabStyle }
								: { ...commonButtonStyle }
						}
						image={hands}
						imgStyle={imgStyle}
						imageAltText='Change to account tab'
					/>
				</>
				<HorizontalDivider thickness='1px' color='rgba(0, 0, 0, 0.15)' />
			</div>
		</div>
	);
};

export default observer(SettingsTabButtonRow);
