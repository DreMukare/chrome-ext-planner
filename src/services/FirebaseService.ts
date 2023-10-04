import { auth, db, fireStore } from '../configs/firebase';
import { when } from 'mobx';
import FirebaseWrapper from './FirebaseWrapper';

class FirebaseService {
	public userPath = 'users';
	public planPath = 'plans';

	public createUserWithEmail(email: string, password: string) {
		FirebaseWrapper.createUserWithEmail(email, password);
	}

	public loginUserWithEmail(email: string, password: string) {
		FirebaseWrapper.loginUserWithEmail(email, password);
	}

	public loginUserWithFacebook() {
		FirebaseWrapper.loginUserWithFacebook();
	}

	public loginUserWithGoogle() {
		FirebaseWrapper.loginUserWithGoogle();
	}
}

export default new FirebaseService();
