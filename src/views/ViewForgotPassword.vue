<template>
	<section class="reset-password">
		<div class="tabs is-centered">
			<ul>
				<li>
					<RouterLink to="/auth">Back</RouterLink>
				</li>
			</ul>
		</div>
		<div class="card auth-form">
			<div class="card-content">
				<div class="title has-text-centered">Reset Password</div>

				<p class="has-text-centered mb-4">
					Enter your email address and we will send you a link to reset your
					password if this email exists.
				</p>

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
						<p class="help is-danger" v-if="storeAuth.authErrorMessage">
							{{ storeAuth.authErrorMessage }}
						</p>
					</div>

					<div class="field">
						<p class="help is-success" v-if="successMessage">
							{{ successMessage }}
						</p>
					</div>

					<div class="field is-grouped is-grouped-right">
						<button class="button is-primary">Send</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useStoreAuth } from '@/stores/storeAuth';
import { reactive, ref } from 'vue';

const storeAuth = useStoreAuth();

const successMessage = ref(null);

const credentials = reactive({
	email: ''
});

const onSubmit = async () => {
	const emailRegex = /\S+@\S+\.\S+/;
	
	if (!credentials.email) {
		successMessage.value = null;
		storeAuth.authErrorMessage = 'Please enter your email address.';
		return;
	}

	if (!emailRegex.test(credentials.email)) {
		successMessage.value = null;
		storeAuth.authErrorMessage = 'Please enter a valid email address.';
		return;
	}

	try {
		const res = await storeAuth.resetPassword(credentials.email);
		console.log(res);
		successMessage.value =
			'Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.';
	} catch (err) {
		console.log(err);
	}
};
</script>

<style lang="scss" scoped>
.auth-form {
	max-width: 25rem;
	margin: 0 auto;
}
</style>
