import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from '@firebase/auth';
import { ref, set, update } from 'firebase/database';
import { db, auth } from '../configs/firebase';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const dbRef = ref(db, 'nala');
class FirebaseWrapper {
	private checkEvent(event: string) {
		const acceptableEvents = [
			'child_added',
			'child_changed',
			'child_removed',
			'child_moved',
			'value',
		];
		return acceptableEvents.includes(event);
	}

	// public on(event: string, callback: Function, cancelCallback?: Function) {
	// 	if (!this.checkEvent(event)) console.log('wrong event string');
	// 	// console.log("ON: " + this.wrapperRef.toString());
	// 	return this.wrapperRef.on(event, callback, cancelCallback);
	// }

	static writeToDb(refString: string, data: { [key: string]: any }) {
		const dataToBeWritten = JSON.parse(JSON.stringify(data));

		set(ref(db, refString), {
			dataToBeWritten,
		});
	}

	static updateInDb(refString: string, data: { [key: string]: any }) {
		const updateData = JSON.parse(JSON.stringify(data));

		update(ref(db, refString), { updateData });
	}

	static createUserWithEmail(email: string, password: string) {
		const user = createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				return userCredential.user;
			})
			.catch((err) => {
				console.error(err);
				console.log('Failed to create user with email and password');
				console.log('Error Code: ' + err.code);
				console.log('Error Message: ' + err.message);
			});

		return user;
	}

	static loginUserWithEmail(email: string, password: string) {
		const user = signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				return userCredentials.user;
			})
			.catch((err) => {
				console.error(err);
				console.log('Failed to sign in with email and password');
				console.log('Error Code: ' + err.code);
				console.log('Error Message: ' + err.message);
			});

		return user;
	}

	static loginUserWithFacebook() {
		const user = signInWithPopup(auth, facebookProvider)
			.then((res) => {
				// user credential
				// const credential = GoogleAuthProvider.credentialFromResult(res)
				// user access
				// const token = credential.accessToken
				return res.user;
			})
			.catch((err) => {
				console.error(err);
				console.log('Failed to sign in user with Facebook');
				console.log('Error Code: ' + err.code);
				console.log('Error Message: ' + err.message);
			});

		return user;
	}

	static loginUserWithGoogle() {
		const user = signInWithPopup(auth, googleProvider)
			.then((res) => {
				// user credential
				// const credential = GoogleAuthProvider.credentialFromResult(res)
				// user access
				// const token = credential.accessToken
				return res.user;
			})
			.catch((err) => {
				console.error(err);
				console.log('Failed to sign in user with Google');
				console.log('Error Code: ' + err.code);
				console.log('Error Message: ' + err.message);
			});

		return user;
	}
}

export default FirebaseWrapper;
