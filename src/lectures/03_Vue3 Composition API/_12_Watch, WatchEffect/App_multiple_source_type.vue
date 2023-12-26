<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		watch(
			() => x.value + y.value, // getter 함수
			(sum, oldValue) => {
				// 변경 감지 되었을 때
				console.log('sum', sum);
				console.log('oldValue', oldValue);
			},
		);

		watch([x, y], ([newX, newY]) => {
			console.log('newX', newX);
			console.log('newY', newY);
		});

		watch(obj, (newValue, oldValue) => {
			console.log('newValue', newValue);
			console.log('oldValue', oldValue);
		});

		watch(
			() => obj.count,
			(newCount, oldCount) => {
				console.log('newCount', newCount);
				console.log('oldCount', oldCount);
			},
		);

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		watch(person, newValue => {
			console.log('newValue: ', newValue);
		});

		return {
			x,
			y,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
