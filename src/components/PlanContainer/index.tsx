import { useState, useRef, LegacyRef } from 'react';
import styles from '../../assets/styles/PlanContainer.module.css';
import PlannerHeader from './PlannerHeader';

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
		</div>
	);
};

export default PlanContainer;
