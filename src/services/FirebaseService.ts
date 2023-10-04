import { auth, db, fireStore } from '../configs/firebase';
import { when } from 'mobx';
import FirebaseWrapper from './FirebaseWrapper';

class FirebaseService {
	public userPath = 'users';
	public planPath = 'plans';
}

export default new FirebaseService();
