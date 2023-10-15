import ToggleButton from '../ToggleButton';
import HorizontalDivider from '../HorizontalDivider';
import rootStore from '../../stores/RootStore';

const MainSettings = () => {
	return (
		<div className='flex flex-col h-[310px]' style={{ overflow: 'overlay' }}>
			<ToggleButton
				label='Weather'
				isChecked={rootStore.uiStore.isWeatherVisible}
				dotColor='#588fe9'
				handleChange={() => {
					rootStore.uiStore.setIsWeatherVisibile(
						!rootStore.uiStore.isWeatherVisible
					);
				}}
			/>
			<HorizontalDivider
				thickness='0.5px'
				color='rgba(0, 0, 0, 0.1)'
				margin='auto'
				length='84%'
			/>
			<ToggleButton
				label='Daily Question'
				isChecked={rootStore.uiStore.isQuestionVisible}
				dotColor='#e765ff'
				handleChange={() => {
					rootStore.uiStore.setIsQuestionVisible(
						!rootStore.uiStore.isQuestionVisible
					);
				}}
			/>
			<HorizontalDivider
				thickness='0.5px'
				color='rgba(0, 0, 0, 0.1)'
				margin='auto'
				length='84%'
			/>
			<ToggleButton
				label='Calories'
				isChecked={rootStore.uiStore.showCaloryInput}
				dotColor='#65d6ff'
				handleChange={() => {
					rootStore.uiStore.setShowCaloryInput(
						!rootStore.uiStore.showCaloryInput
					);
				}}
			/>
			<HorizontalDivider
				thickness='0.5px'
				color='rgba(0, 0, 0, 0.1)'
				length='84%'
				margin='auto'
			/>
			<ToggleButton
				label='24 Hr/12 Hr Toggle'
				isChecked={rootStore.uiStore.timeFormat === '24' ? true : false}
				dotColor='#34eb7a'
				handleChange={() => {
					if (rootStore.uiStore.timeFormat === '24') {
						rootStore.uiStore.setTimeFormat('12');
					} else {
						rootStore.uiStore.setTimeFormat('24');
					}
				}}
			/>
		</div>
	);
};

export default MainSettings;
