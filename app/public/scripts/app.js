import page from 'page';
import Vue from 'vue';
import VueResource from 'vue-resource';

// -views
import e404 from './../views/errors/404.vue';
import FeedView from './../views/feed/index.vue';
import AboutView from './../views/about/index.vue';

// -injects
Vue.use(VueResource);

new Vue({
	el: '#app',

	data: {
		view: {}
	},

	created() {
		const routes = {
			'/feed': FeedView,
			'/about': AboutView
		};

		page('/',		'/feed');
		page('/feed',	() => { this.view = FeedView; });
		page('/about',	() => { this.view = AboutView; });
		page('*',		() => { this.view = e404; });
		page();
	},

	render(h) {
		return h(this.view);
	}
});
