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

	const signUp = useCallback(
		async (email: string, password: string) => {
			try {
				const user = await AuthService.createUserWithEmail(email, password);
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

	const logout = async () => {
		AuthService.logOut();
	};

	const loginWithGoogle = () => {
		const user = AuthService.loginUserWithGoogle();

		rootStore.authStore.setActiveUser(user);
	};

	const loginWithFaceBook = () => {
		const user = AuthService.loginUserWithFacebook();

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
			<LoginCard
				setEmailInChild={setEmailInChild}
				setPasswordInChild={setPasswordInChild}
				login={() => login(email, password)}
				email={email}
				password={password}
			/>
		</div>
	);
};

export default Login;
