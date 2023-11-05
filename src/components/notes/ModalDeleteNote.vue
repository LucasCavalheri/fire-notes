<template>
	<div class="modal is-active p-3">
		<div class="modal-background"></div>
		<div class="modal-card" ref="modalCardRef">
			<header class="modal-card-head">
				<p class="modal-card-title">Delete Note?</p>
				<button class="delete" aria-label="close" @click="closeModal"></button>
			</header>
			<section class="modal-card-body">
				<p>Are you sure you want to delete this note?</p>
			</section>
			<footer class="modal-card-foot is-justify-content-flex-end">
				<button class="button" @click="closeModal">Cancel</button>
				<button class="button is-danger" @click="storeNotes.deleteNote(noteId)">
					Delete
				</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';
import { onClickOutside } from '@vueuse/core';
import { onMounted, onUnmounted, ref } from 'vue';

const storeNotes = useStoreNotes();

const modalCardRef = ref(null);

defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	noteId: {
		type: String,
		required: true
	}
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
	emit('update:modelValue', false);
};

onClickOutside(modalCardRef, () => {
	closeModal();
});

const handleKeyboard = (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
};

onMounted(() => {
	document.addEventListener('keyup', handleKeyboard);
});

onUnmounted(() => {
	document.removeEventListener('keyup', handleKeyboard);
});
</script>

<style lang="scss" scoped></style>
