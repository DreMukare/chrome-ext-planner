import { IconType } from 'react-icons';

const InputGroup = (props: {
	title: string;
	type: string;
	placeholder?: string;
	icon?: IconType;
	marginYValue?: string;
	iconStyle?: { [key: string]: string };
	onChange?: Function;
}) => {
	const {
		title,
		type,
		placeholder,
		icon: Icon,
		marginYValue = '6',
		iconStyle,
		onChange: changeFn,
	} = props; // add icon to this list

	return (
		<div
			className={`flex flex-row items-center w-max gap-8 my-${marginYValue}`}
		>
			{Icon ? (
				<label htmlFor={title}>
					<Icon style={iconStyle} />
				</label>
			) : (
				<label htmlFor={title}>{title}</label>
			)}
			<input
				type={type}
				placeholder={placeholder}
				name={title}
				id={title}
				className='border-b border-teal-500 leading-tight focus:outline-none py-1 px-2 w-[30em] bg-transparent focus:bg-transparent placeholder-teal-500'
				onChange={(e) => changeFn && changeFn(e.target.value)}
			/>
		</div>
	);
};

export default InputGroup;
