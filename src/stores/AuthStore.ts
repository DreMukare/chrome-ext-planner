import { types } from 'mobx-state-tree';
import { auth } from '../configs/firebase';
import ProfileStore from './ProfileStore';
import User from '../models/User';
import UserService from '../services/UserService';

const AuthStore = types
	.model({
		hasInitAuth: false,
		isLoggedIn: types.optional(types.boolean, false),
		activeUser: types.maybe(User),
		// profileSettings: types.optional(ProfileStore, () => ProfileStore.create()),
	})
	.views((self) => ({
		get currentUser() {
			return self.activeUser;
		},
		get isUserLoggedIn() {
			return self.isLoggedIn;
		},
	}))
	.actions((self) => ({
		setActiveUser(user: any) {
			// const lastActiveUserId = self.activeUser?.uid;

			self.activeUser = User.create({
				uid: user.uid,
				name: self.activeUser?.name,
				email: user.email,
			});

			UserService.updateUserInFirebase(self.activeUser);

			self.isLoggedIn = true;
		},

		clearActiveUser() {
			self.activeUser = undefined;
			self.isLoggedIn = false;
		},
	}));

export default AuthStore;
