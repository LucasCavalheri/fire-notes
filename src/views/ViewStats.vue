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
			v-auto-focus
		/>
	</div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes';
import { vAutoFocus } from '@/directives/vAutoFocus';

const storeNotes = useStoreNotes();
</script>

<style lang="scss" scoped></style>
