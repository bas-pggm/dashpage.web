<template lang="pug">
	.container
		navbar
		slot
</template>

<script>
	import navbar from './../components/navbar.vue';

	export default {
		components: {
			'navbar': navbar
		}
	};
</script>
