import plan from '../../assets/btnimages/plan.svg';

const PlannerToggleButton = (props: {
	toggleButtonStyles: CSSModuleClasses;
	isPlannerVisible: boolean;
	togglePlanVisibility: Function;
}) => {
	const {
		toggleButtonStyles: styles,
		isPlannerVisible: visible,
		togglePlanVisibility: togglePlan,
	} = props;

	return (
		<button
			className={styles.planToggle}
			onClick={() => {
				togglePlan();

				if (visible === true) {
					// storePlanInDb();
				}
			}}
		>
			{visible ? (
				<span
					style={{
						height: '25.74px',
						width: '19px',
						borderRadius: '2.5px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
						marginTop: '-30px',
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 planToggleImg'
						style={{
							height: '21px',
							width: '21px',
							stroke: '#dc60a8',
							strokeWidth: '2px',
						}}
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
				</span>
			) : (
				<img src={plan} alt='plan icon ' className='plan-icon' />
			)}
		</button>
	);
};

export default PlannerToggleButton;
