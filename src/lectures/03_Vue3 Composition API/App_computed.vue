<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter: {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// computed는 return 값이 캐시에 저장되기 때문에 일반 함수보다 성능이 좋다
		// 캐시된 데이터가 변경되는 시점은 반응형 데이터가 변경되는 시점이다
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);
		const firstName = ref('정');
		const lastName = ref('하나');
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log('value: ', value);
				console.log('split: ', value.split(' '));
				const [first, last] = value.split(' ');
				console.log('first: ', first);
				console.log('last: ', last);
			},
		});

		console.log('Consle 출력: ', fullName.value);

		// computed 리턴 값은 readonly이므로 setter, getter 함수가 없다면 원본이 변경되지 않음
		fullName.value = '짐 코딩';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
