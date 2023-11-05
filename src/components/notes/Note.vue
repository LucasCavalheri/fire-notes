<template>
	<div class="card mb-5">
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="has-text-right has-text-grey-light mt-2">
					<small>{{ charactersLength }}</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink class="card-footer-item" :to="`/edit-note/${note.id}`"
				>Edit</RouterLink
			>
			<a class="card-footer-item" @click.prevent="modals.deleteNote = true"
				>Delete</a
			>
		</footer>
		<ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
	</div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import ModalDeleteNote from './ModalDeleteNote.vue';

const props = defineProps({
	note: {
		type: Object,
		required: true
	}
});

const charactersLength = computed(() => {
	const description =
		props.note.content.length > 1 ? 'characters' : 'character';
	return `${props.note.content.length} ${description}`;
});

const modals = reactive({
	deleteNote: false
});
</script>

<style lang="scss" scoped></style>
