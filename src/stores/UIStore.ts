import { types } from 'mobx-state-tree';

const UIStore = types
	.model({
		currentView: types.optional(types.string, 'login'),
		errorMessage: types.maybe(types.string),
		isDarkMode: false,
		showSettingsContainer: false,
		activeSettingsTab: types.optional(types.string, 'settings'),
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

		setShowSettingsContainer(show: boolean) {
			self.showSettingsContainer = show;
		},

		setActiveSettingsTab(tab: string) {
			self.activeSettingsTab = tab;
		},
	}))
	.views((self) => ({
		getCurrentView() {
			return self.currentView;
		},

		getIsDarkMode() {
			return self.isDarkMode;
		},

		getShowSettingsContainer() {
			return self.showSettingsContainer;
		},
	}));

export default UIStore;
