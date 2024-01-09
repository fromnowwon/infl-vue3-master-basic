<template>
	<div class="card">
		<div class="card-body">Lifecycle-body</div>
	</div>
</template>

<script>
import { onBeforeUnmount, onUnmounted } from 'vue';
export default {
	setup() {
		// console.log('[Child] setup');
		// onBeforeMount(() => {
		// 	console.log('[Child] onBeforeMount');
		// });
		// onMounted(() => {
		// 	console.log('[Child] onMounted');
		// });

		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('[Child] onUnmounted');
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
