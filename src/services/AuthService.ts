import { auth } from '../configs/firebase';
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from '@firebase/auth';

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

class AuthService {
	public createUserWithEmail(email: string, password: string) {
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

	public loginUserWithEmail(email: string, password: string) {
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

	public loginUserWithFacebook() {
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

	public loginUserWithGoogle() {
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

	public logOut() {
		signOut(auth)
			.then(() => {
				console.log('Successfully signed out');
			})
			.catch((err) => {
				console.log('SOMETHING WENT WRONG');
				console.log(err);
			});
	}
}

export default new AuthService();
