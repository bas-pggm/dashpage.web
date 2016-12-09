import page from 'page';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

//- pages
import feed from './../views/feed/index.vue';
import about from './../views/about/index.vue';
import e404 from './../views/errors/404.vue';

new Vue({
	el: '#app',

	data: {
		theme: '',
		page: {}
	},

	created() {
		page('/', '/feed');
		page('/feed', () => { this.page = feed });
		page('/about', () => { this.page = about });
		page('*', () => { this.page = e404; });
		page();
	},

	render(h) {
		return h(this.page);
	}
});
