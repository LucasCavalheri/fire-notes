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
								placeholder="example@email.com"
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
						<p class="help is-danger" v-if="storeAuth.authErrorMessage">
							{{ storeAuth.authErrorMessage }}
						</p>
					</div>

					<div class="field is-flex is-justify-content-space-between">
						<RouterLink class="control forgot-password" v-if="!register" to="/forgot-password">Forgot Password?</RouterLink>

						<button class="button is-primary">{{ formTitle }}</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useStoreAuth } from '@/stores/storeAuth';
import { computed, reactive, ref } from 'vue';

const storeAuth = useStoreAuth();

const register = ref(false);

const formTitle = computed(() => {
	return register.value ? 'Register' : 'Login';
});

const credentials = reactive({
	email: '',
	password: ''
});

const onSubmit = () => {
	const emailRegex = /\S+@\S+\.\S+/;

	if (!credentials.email || !credentials.password) {
		storeAuth.authErrorMessage = 'Please fill in both fields.';
		return;
	}

	if (!emailRegex.test(credentials.email)) {
		storeAuth.authErrorMessage = 'Please enter a valid email address.';
		return;
	}

	if (register.value) {
		storeAuth.registerUser(credentials);
	} else {
		storeAuth.loginUser(credentials);
	}
};
</script>

<style lang="scss" scoped>
.auth-form {
	max-width: 25rem;
	margin: 0 auto;
}

.forgot-password {
	cursor: pointer;
	text-decoration: underline;
}

.forgot-password:hover {
	text-decoration: none;
}
</style>
