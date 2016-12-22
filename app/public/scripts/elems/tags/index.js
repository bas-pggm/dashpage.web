import item from 'elems/tags/item.vue';

export default {
	components: {
		'item': item,
	},

	data: () => {return{
		tags: []
	};},

	mounted: function () {
		this.$http.get('http://kattegat:3000/tags/').then((resp) => {
			this.tags = resp.body;
		});
	}
};
