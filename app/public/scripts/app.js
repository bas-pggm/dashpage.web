import page from 'page';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

//- pages
import feed from 'pages/feed.vue';
// import feedPost from 'pages/feed/post';
// import feedDetail from 'pages/feed/detail';
// import about from 'pages/about';
// import e404 from 'pages/errors/404';

new Vue({
	el: '#app',

	data: {
		theme: '',
		page: {}
	},

	created() {
		page('/', '/feed');
		// page('/feed/post', () => { this.page = feedPost; });
		// page('/feed/*', () => { this.page = feedDetail; });
		page('/feed', () => { this.page = feed; });
		// page('/about', () => { this.page = about; });
		// page('*', () => { this.page = e404; });
		page();
	},

	render(h) {
		return h(this.page);
	}
});
