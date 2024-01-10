<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" v-bind="$attrs">
			My Button {{ message }}
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';
const message = ref('Message1');
</script>

<style lang="scss" scoped></style>
