import { useEffect, useRef, useState } from 'react';
import styles from '../../assets/styles/WaterSection.module.css';
import rootStore from '../../stores/RootStore';
import WaterCup from '../WaterCup';
import { observer } from 'mobx-react';
import WaterInput from '../WaterInput';

export const BetweenChecks = (props: { borderStyles: string }) => {
	const { borderStyles } = props;
	return (
		<hr
			className={styles.betweenChecks}
			style={{
				border: borderStyles,
			}}
		/>
	);
};

const WaterSection = () => {
	const [wiggling, setWiggling] = useState(false);
	const cupRef = useRef(null);
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const noOfGlasses = rootStore.planStore.plan?.water;

	// Andrew: Need to refactor later
	const glassArray = [1, 2, 3, 4, 5, 6, 7, 8];

	useEffect(() => {
		if (!cupRef.current) return;
		setWiggling(true);
	}, [noOfGlasses]);

	return (
		<div
			className={styles.water}
			style={{
				background: isDarkMode ? '#080808' : '#FCFAFF',
				borderColor: isDarkMode ? '#2C2C2C' : '#FCEFEF',
			}}
		>
			<label style={{ color: isDarkMode ? '#FFFFFF' : '#575757' }}>WATER</label>
			<div className={styles.waterChecks}>
				<WaterCup
					ref={cupRef}
					wiggling={wiggling}
					wiggleStyles={styles.wiggling}
					noOfGlasses={noOfGlasses ? noOfGlasses : '0'}
				/>
				<BetweenChecks
					borderStyles={
						isDarkMode ? '2px solid #1A1A1A' : '0.5px solid #D0D0D0'
					}
				/>
				{glassArray.reverse().map((num: number) => {
					return (
						<WaterInput
							idx={num}
							noOfGlasses={noOfGlasses ? noOfGlasses : '1'}
							waterInputStyles={styles}
							isDarkMode={isDarkMode}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default observer(WaterSection);
