<template>
	<div class="stats">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Stat</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>{{ storeNotes.getTotalNotesCount }}</td>
				</tr>
				<tr>
					<td>Number of Characters (of all notes)</td>
					<td>{{ storeNotes.getTotalCharactersCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
			class="input"
			type="text"
			placeholder="Do you love this application?"
			maxlength="20"
			v-auto-focus
			v-model="feedbackInput"
		/>
	</div>
</template>

<script setup>
import { useWatchCharacters } from '@/composables/useWatchCharacters';
import { vAutoFocus } from '@/directives/vAutoFocus';
import { ref } from 'vue';
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();

const feedbackInput = ref('');

useWatchCharacters(feedbackInput, 20);
</script>

<style lang="scss" scoped></style>
