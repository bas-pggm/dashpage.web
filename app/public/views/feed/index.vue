<template lang="pug">
	layout(side="left")
		postlist(slot="maincontent")
		taglist(slot="sidecontent")
</template>

<script>
	import layout from './../../layouts/river/index.vue';
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
