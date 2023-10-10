import { CSSProperties } from 'react';
import { IconType } from 'react-icons';

const IconButton = (props: {
	onClick: Function;
	name: string;
	icon?: IconType;
	image?: string;
	imageAltText?: string;
	iconStyle?: CSSProperties;
	imgStyle?: CSSProperties;
	btnStyle?: CSSProperties;
}) => {
	const {
		onClick,
		name,
		icon: Icon,
		iconStyle,
		image: Image,
		imageAltText,
		btnStyle,
		imgStyle,
	} = props;

	return (
		<button onClick={() => onClick()} name={name} style={btnStyle}>
			{Icon && <Icon style={iconStyle} />}
			{Image && imageAltText && (
				<img src={Image} alt={imageAltText} style={imgStyle} />
			)}
		</button>
	);
};

export default IconButton;
