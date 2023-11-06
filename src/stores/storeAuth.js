import { auth } from '@/firebase/firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { defineStore } from 'pinia';

export const useStoreAuth = defineStore('storeAuth', {
	state: () => {
		return {
			authErrorMessage: ''
		};
	},
	actions: {
		async registerUser(credentials) {
			try {
				const user = await createUserWithEmailAndPassword(
					auth,
					credentials.email,
					credentials.password
				);
			} catch (error) {
				if (error.code === 'auth/weak-password') {
					this.authErrorMessage = 'Password should be at least 6 characters';
				}

				if (error.code === 'auth/email-already-in-use') {
					this.authErrorMessage = 'Email already in use';
				}
			}
		},
		async loginUser(credentials) {
			try {
				const user = await signInWithEmailAndPassword(
					auth,
					credentials.email,
					credentials.password
				);
			} catch (error) {
				if (error.code === 'auth/invalid-login-credentials') {
					this.authErrorMessage = 'Invalid credentials';
				}
			}
		},
		async logoutUser() {
			try {
				await signOut(auth);
			} catch (error) {
				if (error) {
					console.log(error);
				}
			}
		}
	}
});
