<template>
	<main>
		<div class="container text-center py-4">
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:isLike="post.isLike"
						@toggleLike="post.isLike = !post.isLike"
					>
					</AppCard>
					<button @click="post.isLike = !post.isLike">toggle</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		const obj = reactive({
			title: '제목1',
			contents: '내용1',
		});
		const posts = reactive([
			{
				id: 1,
				title: '제목1',
				contents: '내용1',
				type: 'notice',
				isLike: true,
			},
			{
				id: 2,
				title: '제목2',
				contents: '내용2',
				type: 'news',
				isLike: false,
			},
			{
				id: 3,
				title: '제목3',
				contents: '내용3',
				type: 'notice',
				isLike: false,
			},
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				type: 'news',
				isLike: true,
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				type: 'news',
				isLike: true,
			},
		]);
		return {
			AppCard,
			obj,
			posts,
		};
	},
};
</script>

<style lang="scss" scoped></style>
