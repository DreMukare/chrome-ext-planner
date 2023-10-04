import { types } from 'mobx-state-tree';

const UIStore = types
	.model({
		currentView: types.optional(types.string, 'login'),
		errorMessage: types.maybe(types.string),
		isDarkMode: false,
	})
	.actions((self) => ({
		setDarkMode(toggleDarkMode: boolean) {
			self.isDarkMode = toggleDarkMode;
		},

		setErrorMessage(errorMessage: string) {
			self.errorMessage = errorMessage;
		},

		setCurrentView(view: string) {
			self.currentView = view;
		},
	}))
	.views((self) => ({
		getCurrentView() {
			return self.currentView;
		},

		getIsDarkMode() {
			return self.isDarkMode;
		},
	}));

export default UIStore;
