import './App.css';
import Background from './components/Background';
import Login from './views/Login';
import Main from './views/Main';
import SignUp from './views/SignUp';

function App() {
	const isLoggedIn = false; //will be derived from store
	const signUp = false; //will figure where this is coming from soon

	return (
		<Background>
			{isLoggedIn && <Main />}
			{!isLoggedIn && signUp && <SignUp />}
			{!isLoggedIn && <Login />}
		</Background>
	);
}

export default App;
