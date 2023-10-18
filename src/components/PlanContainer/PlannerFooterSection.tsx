import rootStore from '../../stores/RootStore';
import styles from '../../assets/styles/PlannerFooterSectionStyles.module.css';
import { observer } from 'mobx-react';
import HappinessScale from '../HappinessScale';
import GratefulForFooter from '../GratefulForFooter';
import DailyQuestionFooter from '../DailyQuestionFooter';

const PlannerFooterSection = () => {
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const happinessLevel = rootStore.planStore.plan?.happinessLevel;

	return (
		<div
			className={styles.darkBottom}
			style={{ background: isDarkMode ? '#000000' : '#FCFCFC' }}
		>
			<HappinessScale
				isDarkMode={isDarkMode}
				happinessScaleStyles={styles}
				scaleValue={happinessLevel}
			/>
			<GratefulForFooter />
			<DailyQuestionFooter
				dailyQuestionFooterStyles={styles}
				isDarkMode={isDarkMode}
			/>
		</div>
	);
};

export default observer(PlannerFooterSection);
