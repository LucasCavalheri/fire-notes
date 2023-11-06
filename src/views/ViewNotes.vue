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

		<progress
			class="progress is-small is-primary"
			max="100"
			v-if="!storeNotes.notesLoaded"
		/>
		<template v-else>
			<Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

			<div v-if="!storeNotes.notes.length">
				<p
					class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
				>
					No notes here yet...
				</p>
			</div>
		</template>
	</div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';
import Note from '@/components/notes/Note.vue';
import { useWatchCharacters } from '@/composables/useWatchCharacters';
import { useStoreNotes } from '@/stores/storeNotes';
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
