import { types, getSnapshot, applySnapshot, Instance } from 'mobx-state-tree';
import AuthStore from './AuthStore';
import UIStore from './UIStore';
// import PlanStore from './PlanStore';
// import ThemeStore from './ThemeStore';

export const RootStore = types
	.model({
		storeName: 'rootStore',
		authStore: types.optional(AuthStore, () => AuthStore.create()),
		uiStore: types.optional(UIStore, () => UIStore.create()),
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

export interface IAuthStore extends Instance<typeof AuthStore> {}
export interface IUIStore extends Instance<typeof UIStore> {}

export interface IRootStore {
	authStore: IAuthStore;
	uiStore: IUIStore;
	resetStore: () => void;
}

const rootStore = RootStore.create();

export default rootStore;
