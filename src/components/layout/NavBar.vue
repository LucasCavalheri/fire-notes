<template>
	<nav class="navbar is-success" role="navigation" aria-label="main navigation">
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<div class="navbar-item is-size-4 is-family-monospace">Fire Notes</div>

				<a
					role="button"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					ref="navBarBurguerRef"
					class="navbar-burger"
					:class="{ 'is-active': showMobileNav }"
					@click="showMobileNav = !showMobileNav"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				ref="navBarMenuRef"
				class="navbar-menu"
				:class="{ 'is-active': showMobileNav }"
			>
				<div class="navbar-start">
					<button class="button is-small is-info mt-3 ml-3">Logout</button>
				</div>
				<div class="navbar-end">
					<RouterLink
						class="navbar-item"
						to="/"
						active-class="is-active"
						@click="showMobileNav = false"
						>Home</RouterLink
					>
					<RouterLink
						class="navbar-item"
						to="/stats"
						active-class="is-active"
						@click="showMobileNav = false"
						>Stats</RouterLink
					>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const showMobileNav = ref(false);
const navBarMenuRef = ref(null);
const navBarBurguerRef = ref(null);

onClickOutside(
	navBarMenuRef,
	() => {
		showMobileNav.value = false;
	},
	{
		ignore: [navBarBurguerRef]
	}
);
</script>

<style lang="scss" scoped>
@media (max-width: 63.9375rem) {
	.navbar-menu {
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>
