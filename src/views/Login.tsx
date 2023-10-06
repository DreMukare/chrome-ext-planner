import { useCallback, useState } from 'react';
import LoginCard from '../components/LoginCard';
import AuthService from '../services/AuthService';
import rootStore from '../stores/RootStore';

const Login = () => {
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	const handleAuthError = (error: string) => {
		return error;
	};

	const login = useCallback(
		async (email: string, password: string) => {
			console.log('Running Login');
			setLoading(true);
			try {
				const user = await AuthService.loginUserWithEmail(email, password);
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

	const loginWithGoogle = () => {
		const user = AuthService.loginUserWithGoogle();

		rootStore.authStore.setActiveUser(user);
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
			<LoginCard
				setEmailInChild={setEmailInChild}
				setPasswordInChild={setPasswordInChild}
				login={() => login(email, password)}
				email={email}
				password={password}
			/>
			<button
				onClick={() => {
					rootStore.uiStore.setCurrentView('signup');
				}}
			>
				Sign Up Instead
			</button>
		</div>
	);
};

export default Login;
