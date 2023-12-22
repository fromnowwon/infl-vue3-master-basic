<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo
		suscipit delectus totam pariatur commodi eaque voluptas voluptate ad
		architecto officia. Ab facere voluptas saepe deleniti blanditiis
		accusantium consequuntur iste!
	</div>
	<button v-on:click="fontSize--">-</button>
	<button v-on:click="fontSize++">+</button>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return {
			styleObject,
			fontSize,
		};
	},
};
</script>

<style lang="scss" scoped></style>
