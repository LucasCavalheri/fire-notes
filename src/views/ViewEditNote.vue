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
        <button class="button is-link is-light mr-2" @click="$router.push('/')">
          Cancel Changes
        </button>
				<button
					type="submit"
					class="button is-link has-background-link"
					:disabled="
						!noteContent || noteContent.split(' ').join('').length === 0
					"
					@click="handleSaveClicked"
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
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref('');
const addEditNoteRef = ref(null);

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
	storeNotes.updateNoteContent(route.params.id, noteContent.value);
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
