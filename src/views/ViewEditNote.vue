<template>
	<div class="edit-note">
		<AddEditNote
			ref="addEditNoteRef"
			bgColor="link"
			placeholder="Edit Note!"
      label="Edit Note"
			v-model="noteContent"
		>
			<template #buttons>
        <button class="button is-link is-light" @click="$router.push('/')">
          Cancel Changes
        </button>
				<button
					type="submit"
					class="button is-link has-background-link"
					:disabled="
						!noteContent || noteContent.split(' ').join('').length === 0
					"
					@click="addNote"
				>
					Save Changes
				</button>
			</template>
		</AddEditNote>
	</div>
</template>

<script setup>
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

const storeNotes = useStoreNotes();

const noteContent = ref('');
const addEditNoteRef = ref(null);

noteContent.value = storeNotes.getNoteContent(route.params.id);
</script>

<style lang="scss" scoped></style>
