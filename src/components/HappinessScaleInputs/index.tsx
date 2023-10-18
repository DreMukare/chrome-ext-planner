import { BetweenChecks } from '../PlanContainer/WaterSection';
import smallPinkTick from '../../assets/btnimages/smallPinkTick.svg';
import smiley10 from '../../assets/btnimages/smiley10.svg';
import smiley1 from '../../assets/btnimages/smiley1.svg';
import rootStore from '../../stores/RootStore';

const Check = (props: {
	checkStyles: CSSModuleClasses;
	scaleValue: string;
	idx: number;
	isDarkMode: boolean;
	backgroundColor: string;
}) => {
	const { checkStyles, scaleValue, idx, isDarkMode, backgroundColor } = props;
	const index = String(idx);
	const handleFormChange = () => {
		rootStore.planStore.setUpdatePlan('happinessLevel', String(idx));
	};

	return (
		<div>
			<input
				type='radio'
				name='happyScale'
				id={`happyScale${idx}`}
				value={index}
				checked={scaleValue === index}
				onChange={handleFormChange}
			/>
			<div className={checkStyles.labelArea}>
				<img
					style={{
						visibility: scaleValue === index ? 'visible' : 'hidden',
					}}
					src={smallPinkTick}
					alt='small Pink tick'
				/>
				<label
					style={{
						boxShadow: scaleValue === index ? '0px 3px 3px #FF8BD0' : '',
						backgroundColor: backgroundColor,
					}}
					htmlFor={`happyScale${idx}`}
				>
					{index}
				</label>
			</div>

			<BetweenChecks
				borderStyles={
					isDarkMode ? '0.5px solid #D0D0D0' : '0.5px solid #1A1A1A'
				}
			/>
		</div>
	);
};

const HappinessScaleInputs = (props: {
	scaleValue: string;
	inputStyles: CSSModuleClasses;
	maxValue: string;
	isDarkMode: boolean;
}) => {
	const { scaleValue, inputStyles, maxValue, isDarkMode } = props;
	const scaleArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	const bgColors = [
		'#363636',
		'#4A4A4A',
		'#5F5F5F',
		'#727272',
		'#878787',
		'#9A9A9A',
		'#AEAEAE',
		'#C2C2C2',
		'#D6D6D6',
		'#E9E9E9',
	];

	return (
		<div className={inputStyles.happinessChecks}>
			<img src={smiley10} alt='smiley 10' />
			<BetweenChecks
				borderStyles={
					isDarkMode ? '0.5px solid #D0D0D0' : '0.5px solid #1A1A1A'
				}
			/>

			{scaleArray.map((num: number, idx) => {
				return (
					<Check
						checkStyles={inputStyles}
						scaleValue={scaleValue}
						idx={num}
						isDarkMode={isDarkMode}
						backgroundColor={bgColors[idx]}
					/>
				);
			})}

			<img src={smiley1} alt='smiley 1' />
		</div>
	);
};

export default HappinessScaleInputs;
