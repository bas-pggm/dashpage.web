import 'skeleton';
import Vue from 'vue';
import VueResource from 'vue-resource';
import HomeView from '../views/home/index.pug';
Vue.use(VueResource);






/*var app = */new Vue({
	el: '#app',
	template: HomeView(),
	data: {
		message: 'World',
		posts: []
	},

	mounted: function() {
		this.$http.get('//localhost:3000/posts/').then((res) => {
			this.message = typeof(res.body);
			this.posts = res.body;
		});
	}
});
