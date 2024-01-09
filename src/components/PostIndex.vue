<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />

			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<PostItem
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:isLike="post.isLike"
						@toggleLike="post.isLike = !post.isLike"
					>
					</PostItem>
					<button @click="post.isLike = !post.isLike">toggle</button>
				</div>
			</div>
			<hr class="my-4" />
			<LabelInput
				:modelValue="username"
				label="이름"
				class="parent-class"
				style="color: red"
				id="parent-아이디"
			/>
		</div>
	</main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from './PostCreate.vue';
import { reactive, ref } from 'vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
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
		const createPost = newPost => {
			console.log('newPost: ', newPost);
			posts.push(newPost);
		};
		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return {
			PostItem,
			obj,
			posts,
			createPost,
			username,
			firstname,
			lastname,
		};
	},
};
</script>

<style lang="scss" scoped></style>
