<template lang="pug">
	nav.row
		item(route="/feed") feed
		devider strootje
		item(route="/about") about
</template>

<script>
	import devider from './devider.vue';
	import item from './item.vue';

	export default {
		components: {
			'devider': devider,
			'item': item
		}
	};
</script>

<style lang="less">
</style>
