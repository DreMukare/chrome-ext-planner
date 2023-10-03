import { types, getSnapshot, applySnapshot } from 'mobx-state-tree';
import AuthStore from './AuthStore';
// import PlanStore from './PlanStore';
// import ThemeStore from './ThemeStore';

export const RootStore = types
	.model({
		storeName: 'rootStore',
		authStore: types.optional(AuthStore, () => AuthStore.create()),
		// planStore: types.optional(PlanStore, () => PlanStore.create()),
		// profileStore: types.optional(ProfileStore, () => ProfileStore.create()),
		// themeStore: types.optional(ThemeStore, () => ThemeStore.create())
	})
	.actions((self) => {
		let initialSnapshot: any = undefined;
		function afterCreate() {
			initialSnapshot = getSnapshot(self);
		}

		function resetStore() {
			applySnapshot(self, initialSnapshot); // set store to default
		}

		return {
			afterCreate,
			resetStore,
		};
	});
