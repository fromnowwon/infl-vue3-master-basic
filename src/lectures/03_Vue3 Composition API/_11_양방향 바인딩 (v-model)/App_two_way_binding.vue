<template>
	<div>
		<h2>input value</h2>
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->
		<input type="text" v-model.lazy="inputValue" />
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>
	</div>

	<h2>textarea value</h2>
	<!-- <textarea
		:value="textareaValue"
		@input="event => (textareaValue = event.target.value)"
	></textarea> -->
	<textarea v-model="textareaValue"></textarea>
	<div>{{ textareaValue }}</div>

	<h2>checkbox value</h2>
	<label for="checkbox">{{ checkboxValue }}</label>
	<!-- <input
		type="checkbox"
		id="checkbox"
		:checked="checkboxValue"
		@change="event => (checkboxValue = event.target.checked)"
	/> -->
	<input
		type="checkbox"
		id="checkbox"
		v-model="checkboxValue"
		true-value="YES"
		false-value="NO"
	/>

	<h3>checkbox values</h3>
	<label>
		<input type="checkbox" value="html" v-model="checkboxValues" />
		html
	</label>
	<label>
		<input type="checkbox" value="css" v-model="checkboxValues" />
		css
	</label>
	<label>
		<input type="checkbox" value="js" v-model="checkboxValues" />
		js
	</label>

	<div>{{ checkboxValues }}</div>

	<h2>radio value</h2>
	<label>
		<!-- <input
			type="radio"
			name="type"
			value="O"
			:checked="radioValue === 'O'"
			@change="event => (radioValue = event.target.value)"
		/> -->
		<input
			type="radio"
			name="type"
			value="O"
			:checked="radioValue === 'O'"
			v-model="radioValue"
		/>
		O형
	</label>
	<label>
		<!-- <input
			type="radio"
			name="type"
			value="A"
			:checked="radioValue === 'A'"
			@change="event => (radioValue = event.target.value)"
		/> -->
		<input
			type="radio"
			name="type"
			value="A"
			:checked="radioValue === 'A'"
			v-model="radioValue"
		/>
		A형
	</label>

	<h2>selectbox value</h2>
	<!-- <select
		:value="selectValue"
		@change="event => (selectValue = event.target.value)"
	>
		<option value="html">html</option>
		<option value="javascript">javascript</option>
		<option value="css">css</option>
	</select> -->
	<select :value="selectValue" v-model="selectValue">
		<option value="html">html</option>
		<option value="javascript">javascript</option>
		<option value="css">css</option>
	</select>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref('YES');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
