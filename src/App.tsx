// import { useEffect, useState } from 'react';
import Background from './components/Background';
import rootStore from './stores/RootStore';
import Login from './views/Login';
import Main from './views/Main';
import SignUp from './views/SignUp';
import { observer } from 'mobx-react';

function App() {
	const currentView = rootStore.uiStore.currentView;

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

export default observer(App);
