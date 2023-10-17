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
	svgImage?: React.ReactNode | JSX.Element;
	hasImgAndText?: boolean;
	btnText?: string;
	isButtonDisabled?: boolean;
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
		svgImage,
		hasImgAndText,
		btnText,
		isButtonDisabled,
	} = props;

	return (
		<button
			onClick={(e) => {
				e.preventDefault;
				onClick();
			}}
			name={name}
			style={btnStyle}
			disabled={isButtonDisabled}
		>
			{Icon && <Icon style={iconStyle} />}
			{Image && imageAltText && (
				<img src={Image} alt={imageAltText} style={imgStyle} />
			)}
			{svgImage && svgImage}
			{hasImgAndText && Icon && (
				<>
					<Icon style={iconStyle} /> <span>{btnText}</span>
				</>
			)}
			{hasImgAndText && Image && imageAltText && (
				<>
					<img src={Image} alt={imageAltText} style={imgStyle} />{' '}
					<span>{btnText}</span>
				</>
			)}
			{hasImgAndText && svgImage && (
				<>
					{svgImage} <span>{btnText}</span>
				</>
			)}
		</button>
	);
};

export default IconButton;
