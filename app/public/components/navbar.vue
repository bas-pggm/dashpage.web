<template lang="pug">
	nav.row
		navlink(route="/feed") #feed
		navdevider strootje
		navlink(route="/about") #about
</template>

<script>
	import navdevider from './navdevider.vue';
	import navlink from './navlink.vue';

	export default {
		components: {
			'navdevider': navdevider,
			'navlink': navlink
		}
	};
</script>
