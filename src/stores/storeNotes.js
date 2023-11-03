import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 'id1',
					content: 'This is a long content of note 1'
				},
				{
					id: 'id2',
					content: 'Content of note 2'
				}
			]
		};
	},
	actions: {
		addNote(newNote) {
			this.notes.unshift({
				id: new Date().getTime().toString(),
				content: newNote
			});
		},
		updateNoteContent(noteId, newContent) {
			const note = this.notes.find((note) => note.id === noteId);
			if (note) {
				note.content = newContent;
			}
		},
		deleteNote(noteId) {
			this.notes = this.notes.filter((note) => note.id !== noteId);
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
