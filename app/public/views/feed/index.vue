<template lang="pug">
	layout
		.row
			.columns.seven
				article(v-for="post in posts")
					h3 {{post.Topic}}
					p {{post.Body}}
			.columns.two strootje
			.columns.three
				taglist
</template>

<script>
	import feedlayout from './../../layouts/feed.vue';
	import taglist from './../../components/taglist.vue';

	export default {
		components: {
			'layout': feedlayout,
			'taglist': taglist
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
