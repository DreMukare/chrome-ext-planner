import { observer } from 'mobx-react';
import styles from '../../assets/styles/Wellness.module.css';
import rootStore from '../../stores/RootStore';
import WellnessInput from '../WellnessInput';

const ExerciseMeditationAndRelaxation = () => {
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const exercise = rootStore.planStore.plan?.exercise;
	const meditation = rootStore.planStore.plan?.meditation;
	const relaxation = rootStore.planStore.plan?.relaxation;

	return (
		<div className={styles.exerciseMeditationAndRelaxation}>
			{exercise && (
				<WellnessInput
					name='exercise'
					inputStyles={styles}
					checked={exercise}
					isDarkMode={isDarkMode}
				/>
			)}
			{meditation && (
				<WellnessInput
					name='meditation'
					inputStyles={styles}
					checked={meditation}
					isDarkMode={isDarkMode}
				/>
			)}
			{relaxation && (
				<WellnessInput
					name='relaxation'
					inputStyles={styles}
					checked={relaxation}
					isDarkMode={isDarkMode}
				/>
			)}
		</div>
	);
};

export default observer(ExerciseMeditationAndRelaxation);
