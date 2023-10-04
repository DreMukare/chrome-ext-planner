import { useState } from 'react';
import Background from './components/Background';
import rootStore from './stores/RootStore';
import Login from './views/Login';
import Main from './views/Main';
import SignUp from './views/SignUp';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false); //will be derived from store
	const signUp = false; //will figure where this is coming from soon
	// const user = rootStore.authStore.activeUser;
	// if (user) {
	// 	setIsLoggedIn(true);
	// }

	return (
		<Background>
			{isLoggedIn && <Main />}
			{!isLoggedIn && signUp && <SignUp />}
			{!isLoggedIn && <Login />}
		</Background>
	);
}

export default App;
