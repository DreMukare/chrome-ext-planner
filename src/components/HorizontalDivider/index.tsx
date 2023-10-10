const HorizontalDivider = (props: {
	thickness: string;
	color: string;
	length?: string;
}) => {
	const { thickness, color, length } = props;

	const style = {
		borderWidth: thickness,
		borderColor: color,
		width: length ?? '100%',
	};

	return <hr style={style} />;
};

export default HorizontalDivider;
