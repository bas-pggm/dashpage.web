<template lang="pug">
	article.post
		h3 {{post.Topic}}
		p {{post.Body}}
</template>

<script>
	export default {
		props: {
			post: {
				type: Object,
				required: true
			}
		}
	};
</script>

<style lang="less">
	@import "./../../stylesheets/fonts.less";

	.post {
		h3 {
			font-family: @comfortaa;
		}
	}
</style>
