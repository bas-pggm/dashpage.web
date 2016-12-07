<template lang="pug">
	div.tags
		item(v-for="tag in tags", :tag="tag")
</template>

<script>
	import item from './item.vue';

	export default {
		components: {
			'item': item,
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
