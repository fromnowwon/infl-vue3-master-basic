<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click.self="clickP">
					P 영역
					<!-- <span @click.stop="clickSpan">span 영역</span> -->
					<span @click="clickSpan">span 영역</span>
					<a @click.stop.prevent="clickA" href="https://naver.com">
						a 영역
					</a>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
		};
		const clickA = () => {
			alert('좋아요');
		};

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}

#modifiers div {
	background-color: sandybrown;
}

#modifiers p {
	background-color: darkkhaki;
}

#modifiers span {
	display: block;
	background-color: lightgreen;
}
</style>
