import item from 'elems/posts/item';

export default {
	components: {
		'item': item,
	},

	data: () => {return{
		posts: []
	};},

	mounted: function () {
		this.$http.get('http://kattegat:3000/posts/').then((resp) => {
			this.posts = resp.body;
		});
	}
};
