import { types } from 'mobx-state-tree';

const UIStore = types
	.model({
		currentView: types.optional(types.string, 'login'),
		errorMessage: types.maybe(types.string),
		isDarkMode: false,
		isQuestionVisible: true,
		isWeatherVisible: true,
		isPlannerVisible: false,
		isPlannerOpen: false,
		displayMonthsOrYears: types.optional(types.string, 'months'),
		showCaloryInput: true,
		timeFormat: types.optional(types.string, '24'),
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

		setIsQuestionVisible(visibility: boolean) {
			self.isQuestionVisible = visibility;
		},

		setShowCaloryInput(show: boolean) {
			self.showCaloryInput = show;
		},

		setIsWeatherVisibile(weatherVisibility: boolean) {
			self.isWeatherVisible = weatherVisibility;
		},

		setTimeFormat(timeFormat: '24' | '12') {
			self.timeFormat = timeFormat;
		},

		setPlannerVisibility(visibility: boolean) {
			self.isPlannerVisible = visibility;
		},

		setDisplayMonthsOrYears(monthsOrYears: 'months' | 'years') {
			self.displayMonthsOrYears = monthsOrYears;
		},

		setPlannerOpenState(openOrClosed: boolean) {
			self.isPlannerOpen = openOrClosed;
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
