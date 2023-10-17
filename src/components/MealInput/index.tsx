import rootStore from '../../stores/RootStore';
import styles from '../../assets/styles/MealInput.module.css';
import { Instance } from 'mobx-state-tree';
import { MealArray } from '../../models/Plan';
import IconButton from '../IconButton';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { getUuid } from '../../utils/uuid';

const inputStyle = (isDarkMode: boolean) => ({
	background: isDarkMode ? '#080808' : '#FFFFFF',
	borderBottom: isDarkMode ? '2px solid #1A1A1A' : '0.5px solid #575757',
	color: isDarkMode ? '#FFFFFF' : '#575757',
});

const MealInput = (props: {
	mealName: string;
	mealData: Instance<typeof MealArray>;
}) => {
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const { mealName, mealData } = props;
	const isDarkMode = rootStore.uiStore.isDarkMode;
	const displayCalories = rootStore.uiStore.showCaloryInput;

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		idx: number,
		purpose: string
	) => {
		const list = [...mealData];
		if (purpose === 'mealName') {
			list[idx].mealName = e.target.value;
		}
		if (purpose === 'calories') {
			list[idx].calories = e.target.value;
		}
		rootStore.planStore.setUpdatePlan(mealName, list);
	};

	const handleDeleteButtonClick = (idx: number) => {
		const list = [...mealData];
		if (list.length > 1) {
			list.splice(idx, 1);
		} else {
			mealData[idx].mealName = '';
			mealData[idx].calories = '';
			setButtonDisabled(true);
		}
		rootStore.planStore.setUpdatePlan(mealName, list);
	};

	const handleAddButtonClick = () => {
		const list = [...mealData];
		list.push({ uid: getUuid(), mealName: '', calories: '' });
		rootStore.planStore.setUpdatePlan(mealName, list);
	};

	return (
		<div className={styles.meal}>
			<label
				className={mealName === 'breakfast' ? 'ml-[20px]' : ''}
				style={{ color: isDarkMode ? '#FFFFFF' : '#575757' }}
			>
				{mealName.toLocaleUpperCase()}
			</label>
			{mealData.map((_, idx) => {
				return (
					<div key={idx} className={styles.mealInput}>
						<input
							type='text'
							name={`${mealName}-${idx}`}
							id={`${mealName}-${idx}`}
							style={inputStyle(isDarkMode)}
							value={mealData[idx].mealName}
							onChange={(e) => handleInputChange(e, idx, 'mealName')}
							className={styles.mealText}
						/>
						{displayCalories && <div className={styles.mealDot}></div>}
						{displayCalories && (
							<input
								type='text'
								name={`${mealName}CaloryText-${idx}`}
								id={`${mealName}CaloryText-${idx}`}
								value={mealData[idx].calories}
								placeholder='cal'
								onChange={(e) => handleInputChange(e, idx, 'calories')}
								style={inputStyle(isDarkMode)}
							/>
						)}
						<IconButton
							name={`${mealName}AddButton`}
							onClick={() => handleDeleteButtonClick(idx)}
							isButtonDisabled={buttonDisabled}
							svgImage={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-6 w-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							}
						/>
					</div>
				);
			})}
			<IconButton
				name={`${mealName}AddButton`}
				btnStyle={{ marginTop: '14px' }}
				onClick={() => handleAddButtonClick()}
				isButtonDisabled={buttonDisabled}
				svgImage={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 6v6m0 0v6m0-6h6m-6 0H6'
						/>
					</svg>
				}
			/>
		</div>
	);
};

export default observer(MealInput);
