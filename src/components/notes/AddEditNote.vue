<template>
		<div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
			<label class="label has-text-white" v-if="label">
				{{ label }}
			</label>
			<div class="field">
				<div class="control">
					<textarea
						class="textarea"
						ref="textAreaRef"
						v-auto-focus
						:placeholder="placeholder"
						:value="modelValue"
						@input="$emit('update:modelValue', $event.target.value)"
					/>
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<slot name="buttons" />
				</div>
			</div>
		</div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
	modelValue: {
		type: String,
		default: '',
		required: true
	},
	bgColor: {
		type: String,
		default: 'success'
	},
	placeholder: {
		type: String,
		default: 'Type content here...'
	},
	label: {
		type: String
	}
});

defineEmits(['update:modelValue']);

const textAreaRef = ref(null);

const focusTextArea = () => {
	textAreaRef.value.focus();
};

defineExpose({
	focusTextArea
});

const vAutoFocus = {
	mounted: (el) => {
		el.focus();
	}
}
</script>

<style lang="scss" scoped></style>
