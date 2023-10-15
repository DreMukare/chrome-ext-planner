const HorizontalDivider = (props: {
	thickness: string;
	color: string;
	length?: string;
	margin?: string;
}) => {
	const { thickness, color, length, margin } = props;

	const style = {
		borderWidth: thickness,
		borderColor: color,
		width: length ?? '100%',
		margin: margin ?? '0',
	};

	return <hr style={style} />;
};

export default HorizontalDivider;
