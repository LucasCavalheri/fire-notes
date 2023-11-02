<template>
	<div class="card mb-5">
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
</template>

<script setup>
defineProps({
  note: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
