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

		<div class="card mb-5" v-for="note in notes" :key="note.id">
			<div class="card-content">
				<div class="content">
					{{ note.content }}
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>

<script setup>
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
