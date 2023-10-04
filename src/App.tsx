import { useEffect, useState } from 'react';
import Background from './components/Background';
import rootStore from './stores/RootStore';
import Login from './views/Login';
import Main from './views/Main';
import SignUp from './views/SignUp';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const signUp = false; //will figure where this is coming from soon
	const user = rootStore.authStore.activeUser;
	const currentView = rootStore.uiStore.currentView;

	console.log('Inside App' + { user });
	useEffect(() => {
		if (user) {
			setIsLoggedIn(true);
			rootStore.uiStore.setCurrentView('main');
		}
	}, [user, currentView]);
	// TODO: persist currentView data

	if (currentView === 'main') {
		return (
			<Background>
				<Main />
			</Background>
		);
	}

	if (currentView === 'signup') {
		return (
			<Background>
				<SignUp />
			</Background>
		);
	}
	return (
		<Background>
			<Login />
		</Background>
	);
}

export default App;
