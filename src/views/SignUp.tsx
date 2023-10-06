import { useCallback, useState } from 'react';
import LoginCard from '../components/LoginCard';
import AuthService from '../services/AuthService';
import rootStore from '../stores/RootStore';
import SignUpCard from '../components/SignUpCard';

const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [passwordError, setPasswordError] = useState('');
	const [emailError, setEmailError] = useState('');

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleAuthError = (error: string) => {
		return error;
	};

	const signUp = useCallback(
		async (name: string, email: string, password: string) => {
			try {
				const user = await AuthService.createUserWithEmail(
					name,
					email,
					password
				);
				user && setLoading(false);
				rootStore.authStore.setActiveUser(user);
			} catch (err) {
				setLoading(false);
				const error = err as string;
				handleAuthError(error);
			}
		},
		[email, password]
	);

	const setNameInChild = (name: string) => {
		setName(name);
	};

	const setEmailInChild = (email: string) => {
		setEmail(email);
	};

	const setPasswordInChild = (password: string) => {
		setPassword(password);
	};

	return (
		<div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
			//TODO: Make card a more generic component for reusability
			<SignUpCard
				setNameInChild={setNameInChild}
				setEmailInChild={setEmailInChild}
				setPasswordInChild={setPasswordInChild}
				signUp={() => signUp(name, email, password)}
				name={name}
				email={email}
				password={password}
			/>
		</div>
	);
};

export default SignUp;
