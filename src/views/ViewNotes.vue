<template>
	<div class="notes">
		<AddEditNote
			ref="addEditNoteRef"
			placholder="Add a new note!"
			v-model="newNote"
		>
			<template #buttons>
				<button
					type="submit"
					class="button is-link has-background-success"
					:disabled="!newNote || newNote.split(' ').join('').length === 0"
					@click="addNote"
				>
					Add New Note
				</button>
			</template>
		</AddEditNote>

		<Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
	</div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';
import Note from '@/components/notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/composables/useWatchCharacters';
import { ref } from 'vue';

const storeNotes = useStoreNotes();
const addEditNoteRef = ref(null);

const newNote = ref('');

const addNote = () => {
	storeNotes.addNote(newNote.value);
	newNote.value = '';
	addEditNoteRef.value.focusTextArea();
};

useWatchCharacters(newNote, 100);
</script>

<style lang="scss" scoped>
textarea {
	resize: none;
}
</style>
