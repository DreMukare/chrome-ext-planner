import styles from '../../assets/styles/PlannerHeader.module.css';
import rootStore from '../../stores/RootStore';
import { getDayName } from '../../utils/dateUtils';
import tick from '../../assets/btnimages/themeSelectedTick.svg';
import HorizontalDivider from '../HorizontalDivider';
import { observer } from 'mobx-react';

// TODO: Refact themeing (do it through tailwind)
const colorThemes = [
	{
		name: 'light',
		background: '#FFFFFF',
		text: '#575757',
		borders: '0.5px solid #575757',
		darkBorder: '1px solid #000000',
		lightBorder: '0.5px solid #D0D0D0',
		darkBg: '#FCFCFC',
		waterBg: '#FCFAFF',
		dateContainerFill: '#000000', //date display
		dateBg: '#FFFFFF',
		dateBorder: '#FCEFEF',
		monthActiveFill: '#000000',
		monthFontColor: '#D94F9F',
		dateActiveFill: '#000000',
		dateFontColor: '#D94F9F',
		inputText: '#575757',
	},
	{
		name: 'dark',
		background: '#080808',
		text: '#FFFFFF',
		borders: '2px solid #1A1A1A',
		darkBorder: '2px solid #444444',
		lightBorder: '0.5px solid #1A1A1A',
		darkBg: '#000000',
		waterBg: '#080808',
		dateContainerFill: '#2E2E2E', //date Display
		dateBg: '#191919',
		dateBorder: '#2C2C2C',
		monthActiveFill: '#FFFFFF',
		monthFontColor: '#d94f9f',
		dateActiveFill: '#000000',
		dateFontColor: '#FFFFFF',
		inputText: '#FFFFFF',
	},
];

const PlannerHeader = () => {
	const { isDarkMode } = rootStore.uiStore;
	const { currentDay, currentMonth, currentYear } = rootStore.planStore;
	const theme = isDarkMode ? 'dark' : 'light';

	return (
		<div className='flex'>
			<div
				className={styles.dateDisplay}
				style={{ background: isDarkMode ? '#2E2E2E' : '#000000' }}
			>
				<div className={styles.gradientDot}></div>
				<p>
					{getDayName(currentMonth, currentDay, currentYear).toUpperCase()}{' '}
					{currentDay} {currentYear}
				</p>
			</div>
			<div className={styles.colorChooser}>
				{colorThemes.map((ct) => (
					<button
						className={styles.colorButton}
						style={{
							background: ct.background,
							border: `1px solid rgb(123 123 123)`,
						}}
						onClick={(e) => {
							e.preventDefault();
							rootStore.uiStore.setDarkMode(!isDarkMode);
						}}
					>
						{theme === ct.name && (
							<img src={tick} alt='' className={styles.themeTick} />
						)}
					</button>
				))}
			</div>
			<HorizontalDivider
				thickness='0.5px'
				length='603px'
				color={isDarkMode ? '#2C2C2C' : '#FCEFEF'}
				margin='0 0 14px 51px'
			/>
		</div>
	);
};

export default observer(PlannerHeader);
