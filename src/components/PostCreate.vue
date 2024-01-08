<template>
	<div>
		<div class="row g-3">
			<div class="col col-2">
				<select
					v-model="type"
					class="form-select"
					aria-label="Default select example"
				>
					<option value="news">News</option>
					<option value="notice">Notice</option>
				</select>
			</div>
			<div class="col col-8">
				<input v-model="title" type="text" class="form-control" />
			</div>
			<div class="col col-2 d-grid">
				<button class="btn btn-primary" @click="createPost">
					추가
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// emits: ['createPost'],
	emits: {
		createPost: newPost => {
			console.log('validator: ', newPost.type);
			if (!newPost.type) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const title = ref('');
		const type = ref('news');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return {
			createPost,
			title,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
