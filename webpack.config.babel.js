import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dir = {
	app: ( ...paths ) => { return join(__dirname, 'app', ...paths); },
	dist: ( ...paths ) => { return join(__dirname, 'dist', ...paths); }
};


// entry: {
// 	app: [ 'babel-polyfill', dir.app('public', 'scripts', 'app.js') ]
// },

module.exports = {
	entry: {
		app: [ dir.app('public', 'scripts', 'app.js') ]
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			}
		]
	},

	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js',
			'skeleton$': 'skeleton-css/css/skeleton.css'
		}
	},

	output: {
		path: dir.dist(),
		filename: 'app.js'
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			title: 'dashpage.web',
			filename: 'index.html',
			template: dir.app('public', 'views', 'index.pug')
		})
	]
};
