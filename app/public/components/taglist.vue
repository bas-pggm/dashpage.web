<template lang="pug">
	div
		code(v-for="tag in tags") {{tag.Name}}
</template>

<script>
	import navdevider from './navdevider.vue';
	import navlink from './navlink.vue';

	export default {
		components: {
			'navdevider': navdevider,
			'navlink': navlink
		},

		data: () => {return{
			tags: []
		}},

		mounted: function () {
			this.$http.get('http://kattegat:3000/tags/').then((resp) => {
				this.tags = resp.body;
			});
		}
	};
</script>
