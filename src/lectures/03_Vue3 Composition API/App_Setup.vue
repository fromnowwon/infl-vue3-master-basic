<template>
	<div>
		{{ counter }}
	</div>
	<button @click="increment">Click!</button>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const counter = ref(0);
		const increment = () => {
			counter.value++;
		};

		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
