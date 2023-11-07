import { auth } from '@/firebase/firebase';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { useStoreNotes } from './storeNotes';

export const useStoreAuth = defineStore('storeAuth', {
	state: () => {
		return {
			user: {},
			authErrorMessage: ''
		};
	},
	actions: {
		init() {
			const storeNotes = useStoreNotes();

			onAuthStateChanged(auth, (user) => {
				if (user) {
					this.user.id = user.uid;
					this.user.email = user.email;
					this.router.push('/');
					storeNotes.init();
				} else {
					this.user = {};
					this.router.replace('/auth');
					storeNotes.clearNotes();
				}
			});
		},
		async registerUser(credentials) {
			try {
				await createUserWithEmailAndPassword(
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
				const res = await signInWithEmailAndPassword(
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
		},
		async resetPassword(email) {
			try {
				await sendPasswordResetEmail(auth, email);
			} catch (error) {
				console.log(error);
			}
		}
	}
});
