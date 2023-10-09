import { IconType } from 'react-icons';

const IconButton = (props: {
	onClick: Function;
	name: string;
	icon: IconType;
	iconStyle: { [key: string]: string };
}) => {
	const { onClick, name, icon: Icon, iconStyle } = props;

	return (
		<button onClick={() => onClick()} name={name}>
			{<Icon style={iconStyle} />}
		</button>
	);
};

export default IconButton;
