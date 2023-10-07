import { useState } from 'react';
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
	const [value, setValue] = useState('');
	const {
		title,
		type,
		placeholder,
		icon: Icon,
		marginYValue = '6',
		iconStyle,
		onChange: changeFn,
	} = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		changeFn && changeFn(event.target.value);
		setValue(event.target.value);
	};

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
				value={value}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default InputGroup;
