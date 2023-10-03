import { Instance } from 'mobx-state-tree';
import FirebaseService from './FirebaseService';
import User from '../models/User';
import FirebaseWrapper from './FirebaseWrapper';

class UserService {
	static updateUserInFirebase(user: Instance<typeof User>) {
		const userInfo = JSON.parse(JSON.stringify(user));

		FirebaseWrapper.updateInDb('/users' + userInfo.uid, userInfo);
	}
}

export default UserService;
