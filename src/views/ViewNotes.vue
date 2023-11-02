<template>
	<div class="notes">
		<form @submit.prevent>
			<div class="card has-background-success-dark p-4 mb-5">
				<div class="field">
					<div class="control">
						<textarea
							class="textarea"
							placeholder="Add a new note!"
							ref="newNoteRef"
							v-model="newNote"
						/>
					</div>
				</div>

				<div class="field is-grouped is-grouped-right">
					<div class="control">
						<button
							type="submit"
							class="button is-link has-background-success"
							:disabled="!newNote || newNote.split(' ').join('').length === 0"
							@click="addNote"
						>
							Add New Note
						</button>
					</div>
				</div>
			</div>
		</form>

		<Note v-for="note in notes" :key="note.id" :note="note" />
	</div>
</template>

<script setup>
import Note from '@/components/notes/Note.vue';
import { ref } from 'vue';

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
	{
		id: 'id1',
		content: 'This is a long content of note 1'
	},
	{
		id: 'id2',
		content: 'Content of note 2'
	}
]);

const addNote = () => {
	notes.value.unshift({
		id: Math.random().toString(),
		content: newNote.value
	});
	newNote.value = '';
	newNoteRef.value.focus();
};
</script>

<style lang="scss" scoped>
textarea {
	resize: none;
}
</style>
