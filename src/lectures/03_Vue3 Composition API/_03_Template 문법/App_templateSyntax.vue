<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<p v-once>{{ message }}</p>
		<button v-on:click="message = message + '!'">Click!</button>
		<hr />
		<h2>v-html</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
		<input
			type="text"
			value="홍길동"
			v-bind:disabled="isInutDisabled"
		/><br />
		<!-- v-bind는 :로 단축해서 사용할 수 있다 -->
		<input type="text" value="단축형" :disabled="isInutDisabled" /><br />
		<!-- 전체 속성 지정 -->
		<input v-bind="attrs" />
		<hr />
		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInutDisabled ? '예' : '아니오' }}
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		const rawHtml = ref('<strong>안녕하세요</strong>');

		const dynamicTitle = ref('안녕하세요@!!!');

		const isInutDisabled = ref(false);
		const attrs = ref({
			type: 'password',
			value: '123123',
			disabled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInutDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
