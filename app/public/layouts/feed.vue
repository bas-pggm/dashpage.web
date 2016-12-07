<template lang="pug">
	.container
		navbar
		slot
</template>

<script>
	import navbar from './../components/nav/bar.vue';

	export default {
		components: {
			'navbar': navbar
		}
	};
</script>
