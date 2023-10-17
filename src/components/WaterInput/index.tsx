import rootStore from '../../stores/RootStore';
import smallBlueTick from '../../assets/btnimages/smallBlueTick.svg';
import { BetweenChecks } from '../PlanContainer/WaterSection';

const WaterInput = (props: {
	idx: number;
	noOfGlasses: string;
	waterInputStyles: CSSModuleClasses;
	isDarkMode: boolean;
}) => {
	const { idx, noOfGlasses, waterInputStyles, isDarkMode } = props;
	const index = String(idx);
	const handleFormChange = () => {
		rootStore.planStore.setUpdatePlan('water', String(idx));
	};

	return (
		<div>
			<input
				type='radio'
				name='water'
				id={`water${idx}`}
				value={index}
				checked={noOfGlasses === index}
				onChange={handleFormChange}
			/>
			<div className={waterInputStyles.labelArea}>
				<img
					style={{
						visibility: noOfGlasses === index ? 'visible' : 'hidden',
					}}
					src={smallBlueTick}
					alt='small blue tick'
				/>
				<label
					style={{
						boxShadow: noOfGlasses === index ? 'none' : '',
						color:
							noOfGlasses === index
								? 'white'
								: isDarkMode
								? '#FFFFFF'
								: '#575757',
						backgroundColor:
							noOfGlasses >= index
								? '#93b0ff'
								: isDarkMode
								? '#080808'
								: '#FCFAFF',
						border: isDarkMode ? '0.5px solid #D0D0D0' : '0.5px solid #1A1A1A',
					}}
					htmlFor={`water${idx}`}
				>
					{idx}
				</label>
			</div>

			{index !== '0' && (
				<BetweenChecks
					borderStyles={
						isDarkMode ? '0.5px solid #D0D0D0' : '0.5px solid #1A1A1A'
					}
				/>
			)}
		</div>
	);
};

export default WaterInput;
