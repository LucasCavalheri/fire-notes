<template>
	<div class="card mb-5">
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="columns is-mobile has-text-grey-light mt-2">
					<small class="column">{{ dateFormatted }}</small>
					<small class="column has-text-right">{{ charactersLength }}</small>
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
		<ModalDeleteNote
			v-if="modals.deleteNote"
			v-model="modals.deleteNote"
			:noteId="note.id"
		/>
	</div>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core';
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

const dateFormatted = computed(() => {
	const date = new Date(parseInt(props.note.date));
	const formattedDate = useDateFormat(date, 'MM-DD-YYYY @ HH:mm:ss');

	return formattedDate.value;
});

const modals = reactive({
	deleteNote: false
});
</script>

<style lang="scss" scoped></style>
