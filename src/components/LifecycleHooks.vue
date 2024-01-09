<template>
	<div class="container py-4">
		<input type="text" ref="inputRef" value="Hello" />
		<p id="message">{{ message }}</p>
		<hr />
		<button @click="visible = !visible">Toggle</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
	</div>
</template>

<script>
import { onBeforeUnmount, onUnmounted, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';
export default {
	components: {
		LifecycleChild,
	},
	setup() {
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);
		// console.log('setup');

		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content: ',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });

		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value.value);
		// });

		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('onUnmounted');
		});
		return { inputRef, message, visible };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
