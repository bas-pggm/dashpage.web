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
