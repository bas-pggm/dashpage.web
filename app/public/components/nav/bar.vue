<template lang="pug">
	nav.row
		item(route="/feed") #feed
		devider strootje
		item(route="/about") #about
</template>

<script>
	import devider from './devider.vue';
	import link from './link.vue';

	export default {
		components: {
			'devider': devider,
			'item': link
		}
	};
</script>
