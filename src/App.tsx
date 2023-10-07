import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Background from './components/Background';
import rootStore from './stores/RootStore';
import Login from './views/Login';
import Main from './views/Main';
import SignUp from './views/SignUp';
import { observer } from 'mobx-react';

const queryClient = new QueryClient();

function App() {
	const currentView = rootStore.uiStore.currentView;
	let viewComponent;

	if (currentView === 'main') viewComponent = <Main />;

	if (currentView === 'signup') viewComponent = <SignUp />;

	if (currentView === 'login') viewComponent = <Login />;

	return (
		<QueryClientProvider client={queryClient}>
			<Background>{viewComponent}</Background>
		</QueryClientProvider>
	);
}

export default observer(App);
