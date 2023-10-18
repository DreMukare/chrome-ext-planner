import moon from '../../assets/btnimages/moon.svg';
import HappinessScaleInputs from '../HappinessScaleInputs';

const HappinessScale = (props: {
	isDarkMode: boolean;
	happinessScaleStyles: CSSModuleClasses;
	scaleValue?: string;
}) => {
	const { isDarkMode, happinessScaleStyles, scaleValue } = props;
	return (
		<div className={happinessScaleStyles.happinessScale}>
			<div className={happinessScaleStyles.labelSection}>
				<img src={moon} alt='icon of moon' />
				<label>TODAY'S HAPPY SCALE</label>
				<HappinessScaleInputs
					scaleValue={scaleValue ? scaleValue : '1'}
					inputStyles={happinessScaleStyles}
					maxValue='10'
					isDarkMode={isDarkMode}
				/>
			</div>
		</div>
	);
};

export default HappinessScale;
