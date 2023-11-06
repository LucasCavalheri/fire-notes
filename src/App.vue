<template>
	<NavBar />

	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import { useStoreAuth } from '@/stores/storeAuth';
import { onMounted } from 'vue';

const storeAuth = useStoreAuth();

onMounted(() => {
	storeAuth.init();
});
</script>

<style lang="scss">
@import 'bulma/css/bulma.min.css';
</style>
