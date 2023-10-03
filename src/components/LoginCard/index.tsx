import InputGroup from '../InputGroup';
import { FaEnvelope, FaKey } from 'react-icons/fa';

const LoginCard = () => {
	return (
		<div className='absolute max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center border-solid border-3 gap-6 px-8 py-10 bg-white w-[60em]'>
			<h2 className='text-3xl'>Login</h2>
			<form>
				<InputGroup
					title='Email'
					type='email'
					icon={FaEnvelope}
					placeholder='Enter your email'
				/>
				<InputGroup
					title='Password'
					type='password'
					icon={FaKey}
					placeholder='Enter your password'
				/>
				<button type='submit'>Log In</button>
			</form>
		</div>
	);
};

export default LoginCard;
