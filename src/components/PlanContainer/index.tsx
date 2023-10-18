import { LegacyRef } from 'react';
import styles from '../../assets/styles/PlanContainer.module.css';
import PlannerHeader from './PlannerHeader';
import GratefulForAndExcitedAbout from './GratefulForAndExcitedAbout';
import DailyTodo from './DailyTodo';
import MainThreeTodo from './MainThreeTodo';
import MealSection from './MealSection';
import PlannerFooterSection from './PlannerFooterSection';
import WaterSection from './WaterSection';
import ExerciseMeditationAndRelaxation from './ExerciseMeditationAndRelaxation';
import DatePicker from '../DatePicker';

const PlanContainer = (props: {
	animationStyle: string;
	ref: LegacyRef<HTMLDivElement>;
}) => {
	const { animationStyle, ref } = props;

	return (
		<div className={`${styles.planContainer} ${animationStyle}`} ref={ref}>
			<form className={styles.planner}>
				<PlannerHeader />
				<GratefulForAndExcitedAbout />
				<MainThreeTodo />
				<DailyTodo />
				<MealSection />
				<WaterSection />
				<ExerciseMeditationAndRelaxation />
				<PlannerFooterSection />
			</form>
			<DatePicker />
		</div>
	);
};

export default PlanContainer;
