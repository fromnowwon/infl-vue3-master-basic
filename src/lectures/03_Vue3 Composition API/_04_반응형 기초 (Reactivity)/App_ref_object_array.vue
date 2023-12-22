<template>
	<div></div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
	setup() {
		// ref -> 객체에서 사용
		const count = ref(0);
		const state = reactive({
			count,
		});

		// ref는 내부에 value라는 하나의 속성만 가지고 있으며, 자동으로 unwrapping 되기 때문에 .value를 추가할 필요가 없다.
		console.log('state.count.value: ', state.count.value);
		console.log('state.count: ', state.count);

		// ref -> 배열에서 사용
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0]: ', arr[0].value);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
