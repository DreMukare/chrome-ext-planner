import { IconType } from 'react-icons';

const InputGroup = (props: {
	title: string;
	type: string;
	placeholder: string;
	icon?: IconType;
	marginBottomValue?: number;
}) => {
	const { title, type, placeholder, icon: Icon, marginBottomValue = 6 } = props; // add icon to this list

	return (
		<div className={`w-max mb-${marginBottomValue}`}>
			{Icon ? (
				<label htmlFor={title}>
					<Icon />
				</label>
			) : (
				<label htmlFor={title}>{title}</label>
			)}
			<input type={type} placeholder={placeholder} name={title} id={title} />
		</div>
	);
};

export default InputGroup;
