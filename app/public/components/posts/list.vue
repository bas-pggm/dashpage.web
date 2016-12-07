<template lang="pug">
	div.posts
		item(v-for="post in posts", :post="post")
</template>

<script>
	import item from './item.vue';

	export default {
		components: {
			'item': item,
		},

		data: () => {return{
			posts: []
		}},

		mounted: function () {
			this.$http.get('http://kattegat:3000/posts/').then((resp) => {
				this.posts = resp.body;
			});
		}
	};
</script>
