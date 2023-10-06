import InputGroup from '../InputGroup';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';

const iconStyle = {
	color: '#38b2ac',
	width: '2em',
	height: '1em',
};

const SignUpCard = (props: {
	name: string;
	email: string;
	password: string;
	setEmailInChild: Function;
	setPasswordInChild: Function;
	setNameInChild: Function;
	signUp: Function;
}) => {
	const {
		email,
		password,
		setEmailInChild,
		setPasswordInChild,
		setNameInChild,
		signUp,
	} = props;

	return (
		<div
			className=' shadow-lg flex flex-col justify-center border-solid border-3 gap-4 px-8 py-10 bg-white w-[40em] h-[20em] text-center bg-clip-padding bg-opacity-60 border border-gray-200'
			style={{ backdropFilter: 'blur(20px)' }}
		>
			<h2 className='text-3xl text-teal-500'>Create your account</h2>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					signUp(name, email, password);
				}}
			>
				<InputGroup
					title='Name'
					type='name'
					icon={FaUser}
					iconStyle={iconStyle}
					placeholder='Full Name'
					onChange={setNameInChild}
				/>
				<InputGroup
					title='Email'
					type='email'
					icon={FaEnvelope}
					iconStyle={iconStyle}
					placeholder='Email'
					onChange={setEmailInChild}
				/>
				<InputGroup
					title='Password'
					type='password'
					icon={FaKey}
					iconStyle={iconStyle}
					placeholder='Password'
					onChange={setPasswordInChild}
				/>
				<button
					type='submit'
					className='bg-transparent hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded w-full my-6'
					name='submit'
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUpCard;
