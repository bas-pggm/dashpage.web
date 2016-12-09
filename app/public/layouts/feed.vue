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

<style lang="less" scoped>
	.container {
		// background-color: #454545;
		background-color: #ccc;
	}
</style>
