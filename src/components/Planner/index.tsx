import { observer } from 'mobx-react';
import { useState, useCallback } from 'react';
import rootStore from '../../stores/RootStore';
import styles from '../../assets/styles/PlanStyles.module.css';
import containerStyles from '../../assets/styles/PlanContainerStyles.module.css';
import IconButton from '../IconButton';
import PlanContainer from '../PlanContainer';

const Planner = () => {
	const [animation, setAnimation] = useState(containerStyles.scaleIn);
	const isPlannerVisible = rootStore.uiStore.isPlannerVisible;

	const togglePlanVisibility = () => {
		if (isPlannerVisible) {
			rootStore.uiStore.setPlannerOpenState(true);
			setAnimation(styles.scaleOut);
			setTimeout(() => {
				rootStore.uiStore.setPlannerVisibility(false);
			}, 200);
			return;
		}
		setAnimation(containerStyles.scaleIn);
		rootStore.uiStore.setPlannerVisibility(true);
	};

	return (
		<div>
			{rootStore.uiStore.isPlannerVisible && (
				<PlanContainer animationStyle={animation} />
			)}
			<IconButton />
		</div>
	);
};

export default observer(Planner);
