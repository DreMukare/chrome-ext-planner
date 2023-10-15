import { auth } from '../configs/firebase';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from '@firebase/auth';
import rootStore from '../stores/RootStore';
import {
	confirmPasswordReset,
	sendPasswordResetEmail,
	updateProfile,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

class AuthService {
	public createUserWithEmail(name: string, email: string, password: string) {
		const user = createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				rootStore.authStore.setActiveUser(userCredential.user);
				rootStore.uiStore.setCurrentView('main');
				auth.currentUser &&
					updateProfile(auth.currentUser, { displayName: name })
						.then(() => {
							console.log('Successfully set user name');
						})
						.catch((err) => {
							console.log(
								'Something went wrong with setting the name of the new user: ' +
									err
							);
						});
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
				rootStore.authStore.setActiveUser(userCredentials.user);
				rootStore.uiStore.setCurrentView('main');
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
				rootStore.authStore.setActiveUser(null);
				rootStore.uiStore.setCurrentView('login');
			})
			.catch((err) => {
				console.log('SOMETHING WENT WRONG');
				console.log(err);
			});
	}

	public async updateUserPassword(email: string) {
		// Andrew: incomplete function
		// default settings from FireBase docs
		const actionCodeSettings = {
			url: 'https://www.example.com/?email=user@example.com',
			iOS: {
				bundleId: 'com.example.ios',
			},
			android: {
				packageName: 'com.example.android',
				installApp: true,
				minimumVersion: '12',
			},
			handleCodeInApp: true,
		};
		await sendPasswordResetEmail(auth, email, actionCodeSettings);
		// Obtain code and new pass from user.
		const code = '';
		const newPass = '';
		await confirmPasswordReset(auth, code, newPass);
	}
}

export default new AuthService();
