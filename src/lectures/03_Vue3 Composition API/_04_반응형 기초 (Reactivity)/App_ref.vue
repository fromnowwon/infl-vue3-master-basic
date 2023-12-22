<template>
	<div>
		<p>{{ message }}</p>
		<!-- <p>{{ message.value }}</p> -->
		<button v-on:click="addMessage">Click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// reactive 함수는 레퍼런스 타입(객체, 배열 등)의 반응형 객체를 선언하기 때문에 String 타입인 message는 변경되지 않는다.
		// let message = reactive('Hello Vue!');
		// const addMessage = () => {
		// 	message = message + '!';
		// };

		// reactive 객체를 사용해서 Primitive 타입의 값을 변경하려면 아래와 같이 임의의 속성을 선언한다.
		// let message = reactive({
		// 	value: 'Hello Vue!',
		// });
		// const addMessage = () => {
		// 	message.value = message.value + '!';
		// };

		// ref는 변이 가능한 객체를 반환하기 때문에 Primitive 타입의 값도 객체의 value로 반환되어 변경할 수 있게 된다.
		// ref는 내부에 value라는 하나의 속성만 가지고 있으며, 자동으로 unwrapping 되기 때문에 .value를 추가할 필요가 없다.
		let message = ref('Hello Vue!');
		const addMessage = () => {
			message.value = message.value + '!';
		};

		return {
			message,
			addMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
