// Andrew: for exercise, meditation and relaxation

import rootStore from '../../stores/RootStore';

const WellnessInput = (props: {
	name: string;
	inputStyles: CSSModuleClasses;
	checked: boolean;
	isDarkMode: boolean;
}) => {
	const { name, inputStyles, checked, isDarkMode } = props;

	const handleChange = () => {
		rootStore.planStore.setUpdatePlan(name, !checked);
	};

	return (
		<div className={inputStyles.checkSection}>
			<input
				type='checkbox'
				name={name}
				id={name}
				checked={checked}
				onChange={() => handleChange()}
				className={isDarkMode ? (!checked ? inputStyles.darkCheckbox : '') : ''}
			/>
			<label
				htmlFor={name}
				style={{ color: isDarkMode ? '#FFFFFF' : '#575757' }}
			>
				{name.toLocaleUpperCase()}
			</label>
		</div>
	);
};

export default WellnessInput;
