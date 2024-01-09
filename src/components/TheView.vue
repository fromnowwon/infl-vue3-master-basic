<template>
	<main>
		<MyButton @click="sayHello" class="my-button"></MyButton>
		<LabelInput label="이름" data-id="id입니다."></LabelInput>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
export default {
	components: {
		MyButton,
		LabelInput,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요.');
		};

		return {
			sayHello,
		};
	},
};
</script>

<style lang="scss" scoped></style>
