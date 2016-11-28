<template lang="pug">
	layout
		p error: 404
</template>

<script>
	import feedlayout from './../../layouts/feed.vue';

	export default {
		components: {
			'layout': feedlayout
		}
	};
</script>
