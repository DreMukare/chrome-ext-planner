import { IconType } from 'react-icons';

const InputGroup = (props: {
	title: string;
	name: string;
	type?: string;
	placeholder?: string;
	icon?: IconType;
	marginYValue?: string;
	iconStyle?: { [key: string]: string };
	onChange?: Function;
	labelStyle?: { [key: string]: string };
	isTextAreaInput?: boolean;
	textAreaStyles?: { [key: string]: string };
	textAreaClasses?: string;
	containerStyleOverride?: string;
	handleKeyUp?: Function;
	handleMouseEnter?: Function;
	value?: string;
}) => {
	const {
		value,
		title,
		type,
		name,
		placeholder,
		icon: Icon,
		marginYValue = '6',
		iconStyle,
		onChange: changeFn,
		labelStyle,
		isTextAreaInput,
		containerStyleOverride,
		textAreaClasses,
		textAreaStyles,
		handleKeyUp,
		handleMouseEnter,
	} = props;

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		changeFn && changeFn(event.target.value);
	};

	const handleKeyUpInternal = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		handleKeyUp && handleKeyUp(e);
	};

	const handleMouseEnterInternal = (
		e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>
	) => {
		handleMouseEnter && handleMouseEnter(e);
	};

	return (
		<div
			className={
				containerStyleOverride
					? containerStyleOverride
					: `flex flex-row items-center w-max gap-8 my-${marginYValue}`
			}
		>
			{Icon ? (
				<label htmlFor={name}>
					<Icon style={iconStyle} />
				</label>
			) : (
				<label htmlFor={name} style={labelStyle}>
					{title}
				</label>
			)}
			{isTextAreaInput ? (
				<textarea
					rows={1}
					name={name}
					id={name}
					onKeyUp={(e) => {
						handleKeyUpInternal(e);
					}}
					onMouseEnter={(e) => {
						handleMouseEnterInternal(e);
					}}
					value={value}
					onChange={(e) => {
						handleChange(e);
					}}
					className={textAreaClasses}
					style={textAreaStyles}
				></textarea>
			) : (
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					id={name}
					className='border-b border-teal-500 leading-tight focus:outline-none py-1 px-2 w-[30em] bg-transparent focus:bg-transparent placeholder-teal-500'
					value={value}
					onChange={(e) => handleChange(e)}
				/>
			)}
		</div>
	);
};

export default InputGroup;
