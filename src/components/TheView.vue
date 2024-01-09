<template>
	<div>
		<div class="container py-4">
			<ProvideInject></ProvideInject>
		</div>
	</div>
</template>

<script>
import ProvideInject from './ProvideInject.vue';
export default {
	components: {
		ProvideInject,
	},
	setup() {
		return { ProvideInject };
	},
};
</script>

<style lang="scss" scoped></style>
