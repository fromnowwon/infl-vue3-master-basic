<template>
	<div>
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<p v-if="input">{{ input.value }}, {{ $refs.input.value }}</p>
		<hr />
		<!-- <ul>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul> -->
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		console.log('setup: ', input.value);
		onMounted(() => {
			input.value.value = 'Hello!';
			console.log('onMounted: ', input.value);

			// itemRefs.value.forEach(item =>
			// 	console.log('item: ', item.textContent),
			// );
			itemRefs.value.forEach(item => console.log('item: ', item));
			console.log('child.message', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['apple', 'strawberry', 'grape']);
		const itemRefs = ref([]);
		const child = ref(null);
		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
