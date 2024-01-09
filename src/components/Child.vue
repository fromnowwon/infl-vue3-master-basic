<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			appMessage: {{ appMessage }}
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
import DeepChild from './DeepChild.vue';
export default {
	components: {
		DeepChild,
	},
	setup() {
		const appMessage = inject('app-message');
		return {
			DeepChild,
			appMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
