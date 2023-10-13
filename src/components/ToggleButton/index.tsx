import styles from '../../assets/styles/ToggleButtonStyles.module.css';

const ToggleButton = (props: {
	label: string;
	handleChange: Function;
	isChecked: boolean;
	dotColor: string;
}) => {
	const { label, handleChange, isChecked, dotColor } = props;

	return (
		<div className={styles.toggleInputContainer}>
			<div className={styles.dotAndText}>
				<div className={`${styles.dot} bg-{${dotColor}}`}></div>
				<p>{label}</p>
			</div>
			<div className='flex'>
				<input
					type='checkbox'
					id='toggleBtn'
					className={styles.checkbox}
					onChange={() => {
						handleChange();
					}}
					checked={isChecked}
				/>
				<label htmlFor='toggleBtn' className={styles.switch}></label>
			</div>
		</div>
	);
};

export default ToggleButton;
