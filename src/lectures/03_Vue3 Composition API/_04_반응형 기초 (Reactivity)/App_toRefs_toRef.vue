<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
		<p>year: {{ year }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		// 구조분해할당 하게 되면 반응형을 잃는다
		// const { author, title } = book;

		// toRefs를 사용하면 반응성을 잃지 않으면서 구조분해할당 된다.
		const { author, title } = toRefs(book);
		const year = toRef(book, 'year');

		return {
			author,
			title,
			book,
			year,
		};
	},
};
</script>

<style lang="scss" scoped></style>
