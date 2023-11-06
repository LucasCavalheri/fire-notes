import { db } from '@/firebase/firebase';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	updateDoc
} from 'firebase/firestore';
import { defineStore } from 'pinia';

const notesCollectionRef = collection(db, 'notes');
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [],
			notesLoaded: false
		};
	},
	actions: {
		async getNotes() {
			this.notesLoaded = false;
			const unsubscribe = onSnapshot(notesCollectionQuery, (querySnapshot) => {
				let notes = [];
				querySnapshot.forEach((doc) => {
					let note = {
						id: doc.id,
						content: doc.data().content,
						date: doc.data().date
					};

					notes.push(note);
				});
				this.notes = notes;
				this.notesLoaded = true;
			});

			// unsubscribe();
		},
		async addNote(newNote) {
			const currentDate = new Date().getTime();
			const date = currentDate.toString();

			await addDoc(notesCollectionRef, {
				content: newNote,
				date,
			});
		},
		async updateNoteContent(noteId, newContent) {
			await updateDoc(doc(notesCollectionRef, noteId), {
				content: newContent
			});
		},
		async deleteNote(noteId) {
			await deleteDoc(doc(notesCollectionRef, noteId));
		}
	},
	getters: {
		getNoteContent: (state) => {
			return (noteId) => {
				const note = state.notes.find((note) => note.id === noteId);
				return note ? note.content : '';
			};
		},
		getTotalNotesCount: (state) => {
			return state.notes.length;
		},
		getTotalCharactersCount: (state) => {
			return state.notes.reduce(
				(total, note) => total + note.content.length,
				0
			);
		}
	}
});
