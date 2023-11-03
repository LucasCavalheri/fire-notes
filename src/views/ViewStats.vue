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
	</div>
</template>

<script setup>
import { useStoreNotes } from '../stores/storeNotes';

const storeNotes = useStoreNotes();
</script>

<style lang="scss" scoped></style>
