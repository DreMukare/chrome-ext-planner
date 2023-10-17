import { observer } from 'mobx-react';
import styles from '../../assets/styles/MealSection.module.css';
import rootStore from '../../stores/RootStore';
import MealInput from '../MealInput';

const MealSection = () => {
	const breakfast = rootStore.planStore.plan?.breakfast;
	const lunch = rootStore.planStore.plan?.lunch;
	const dinner = rootStore.planStore.plan?.dinner;

	return (
		<div className={styles.mealSection}>
			{breakfast !== null ||
				(undefined && <MealInput mealName='breakfast' mealData={breakfast} />)}
			{lunch !== null ||
				(undefined && <MealInput mealName='lunch' mealData={lunch} />)}
			{dinner !== null ||
				(undefined && <MealInput mealName='dinner' mealData={dinner} />)}
		</div>
	);
};

export default observer(MealSection);
