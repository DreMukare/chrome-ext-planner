import styles from '../assets/styles/MainViewStyles.module.css';
import Settings from '../components/Settings';
import Question from '../components/DailyQuestion';
import Quote from '../components/Quote';
import Planner from '../components/Planner';
import rootStore from '../stores/RootStore';

const Main = () => {
	const showQuestion = rootStore.uiStore.isQuestionVisible;

	return (
		<section className={styles.mainSection}>
			<Settings />
			<section className={styles.midSection}>
				{showQuestion && <Question />}
				<Quote />
			</section>
			<section className={styles.planAndWeatherSection}>
				<Planner />
			</section>
		</section>
	);
};

export default Main;
