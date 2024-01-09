<template>
	<main>
		<div class="container py-4">
			<MyButton @click="sayHello" class="my-button"></MyButton>
			<LabelInput label="이름" data-id="id입니다."></LabelInput>
			<hr />
			<FancyButton>
				<!-- 슬롯 콘텐츠 -->
				Click!!
				<span style="color: red">@@@</span>
			</FancyButton>
			<FancyButton v-slot="{ fancyMessage }">
				<!-- 슬롯 콘텐츠 -->
				{{ fancyMessage }}
			</FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">
					{{ fancyMessage }}
				</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- <template v-slot:default>내용입니다.</template> -->
				암시적인 디폴트 슬롯@
			</AppCard>
			<AppCard>
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<!-- <template #[slotArgs]>제목입니다.</template> -->
				<template #default="{ childMessage, helloMessage }">
					내용입니다. {{ message }} {{ childMessage }}
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import AppCard from './AppCard.vue';
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
export default {
	components: {
		AppCard,
		MyButton,
		LabelInput,
		FancyButton,
	},
	setup() {
		const slotArgs = ref('header');
		const message = ref('안녕?');
		const sayHello = () => {
			alert('안녕하세요.');
		};

		return {
			sayHello,
			slotArgs,
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
