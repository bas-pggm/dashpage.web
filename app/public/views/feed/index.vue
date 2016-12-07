<template lang="pug">
	layout
		.row
			.columns.seven
				postlist
			.columns.two strootje
			.columns.three
				taglist
</template>

<script>
	import layout from './../../layouts/feed.vue';
	import taglist from './../../components/tags/list.vue';
	import postlist from './../../components/posts/list.vue';

	export default {
		components: {
			'layout': layout,
			'taglist': taglist,
			'postlist': postlist
		}
	};
</script>
