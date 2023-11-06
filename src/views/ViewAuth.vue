<template>
	<section class="auth">
		<div class="tabs is-centered">
			<ul>
				<li :class="{ 'is-active': !register }">
					<a @click.prevent="register = false">Login</a>
				</li>
				<li :class="{ 'is-active': register }">
					<a @click.prevent="register = true">Register</a>
				</li>
			</ul>
		</div>
		<div class="card auth-form">
			<div class="card-content">
				<div class="title has-text-centered">
					{{ formTitle }}
				</div>

				<form @submit.prevent="onSubmit">
					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="e.g Alex Smith"
								v-model="credentials.email"
							/>
						</div>
					</div>

					<div class="field">
						<label class="label">Password</label>
						<div class="control">
							<input
								class="input"
								type="password"
								placeholder="********"
								v-model="credentials.password"
							/>
						</div>
					</div>

					<div class="field">
						<p class="help is-danger" v-if="error">{{ error }}</p>
					</div>

					<div class="field is-grouped is-grouped-right">
						<p class="control">
							<button class="button is-primary">{{ formTitle }}</button>
						</p>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const register = ref(false);
const error = ref(null);

const formTitle = computed(() => {
	return register.value ? 'Register' : 'Login';
});

const credentials = reactive({
	email: '',
	password: ''
});

const onSubmit = () => {
	if (!credentials.email || !credentials.password) {
		error.value = 'Please fill in both fields.';
    return;
	}

  if (register.value) {
    
  } else {

  }
};
</script>

<style lang="scss" scoped>
.auth-form {
	max-width: 25rem;
	margin: 0 auto;
}
</style>
