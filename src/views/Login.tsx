import { useState } from 'react';
import LoginCard from '../components/LoginCard';
import AuthService from '../services/AuthService';
import rootStore from '../stores/RootStore';

const Login = () => {
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState('');

	const clearErrors = () => {
		setEmailError('');
		setPasswordError('');
	};

	const login = (email: string, password: string) {
		const user = AuthService.loginUserWithEmail(email, password)

		rootStore.authStore.setActiveUser(user)
	}

	const signUp = (email: string, password: string) {
		const user = AuthService.createUserWithEmail(email, password)

		rootStore.authStore.setActiveUser(user)
	}

	const logout = AuthService.logOut()

	const loginWithGoogle = () => {
		const user = AuthService.loginUserWithGoogle()

		rootStore.authStore.setActiveUser(user)
	}

	const loginWithFaceBook = () => {
		const user = AuthService.loginUserWithFacebook()

		rootStore.authStore.setActiveUser(user)
	}

	const 

	return (
		<div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center'>
			<LoginCard />
		</div>
	);
};

export default Login;
