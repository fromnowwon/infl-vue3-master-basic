<template>
	<main>
		<LifecycleHooks></LifecycleHooks>
	</main>
</template>

<script>
import LifecycleHooks from './LifecycleHooks.vue';
export default {
	components: {
		LifecycleHooks,
	},
	setup() {
		return { LifecycleHooks };
	},
};
</script>

<style lang="scss" scoped></style>
