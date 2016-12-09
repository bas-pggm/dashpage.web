<template lang="pug">
	layout(side="left")
		div(slot="maincontent") 404 - page not found
</template>

<script>
	import layout from './../../layouts/river/index.vue';

	export default {
		components: {
			'layout': layout
		}
	};
</script>
