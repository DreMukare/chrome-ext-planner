const WaterCup = (props: {
	ref: React.MutableRefObject<null>;
	wiggling: boolean;
	wiggleStyles: string;
	noOfGlasses: string;
}) => {
	const { wiggling, wiggleStyles, ref: cupRef, noOfGlasses } = props;
	return (
		<svg
			className={wiggling ? wiggleStyles : ''}
			width='30'
			height='31'
			viewBox='0 0 30 31'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			ref={cupRef}
		>
			<path
				d='M15 30.3281C23.2843 30.3281 30 23.6124 30 15.3281C30 7.04383 23.2843 0.328102 15 0.328102C6.71573 0.328102 0 7.04383 0 15.3281C0 23.6124 6.71573 30.3281 15 30.3281Z'
				fill='#F4F7FF'
			/>
			<path
				d='M10.0832 8.5H19.9168C20.2087 8.5 20.4385 8.74894 20.4152 9.03987L19.3752 22.0399C19.3544 22.2997 19.1375 22.5 18.8768 22.5H11.1232C10.8625 22.5 10.6456 22.2997 10.6248 22.0399L9.58479 9.03987C9.56151 8.74894 9.79133 8.5 10.0832 8.5Z'
				fill='url(#paint0_linear_402_2)'
				stroke='#0044FF'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_402_2'
					x1='15'
					y1='8'
					x2='15'
					y2={`${26 - parseInt(noOfGlasses) * 2} `}
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0.776042' stopColor='#0044FF' stopOpacity='0' />
					<stop offset='0.776142' stopColor='#0044FF' />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default WaterCup;
