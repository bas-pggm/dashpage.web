import { join, resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ComponentResolverPlugin from './app/core/component-resolver-plugin.js'

const dir = {
	app: ( ...paths ) => { return join(__dirname, 'app', 'public', ...paths); },
	core: ( ...paths ) => { return join(__dirname, 'app', 'core', ...paths); },
	dist: ( ...paths ) => { return join(__dirname, 'dist', ...paths); }
};

module.exports = {
	entry: {
		app: [ dir.app('scripts', 'app.js') ]
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: 'file-loader?name=[name].css!less-loader'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader'
			},
			{
				test: /\.vue$/,
				loader: 'load'
			}
		]
	},

	vue: {
		loaders: {
			less: ExtractTextPlugin.extract("css-loader!less-loader")
		}
	},

	resolve: {
		root: resolve(dir.app('comps')),
		extensions: [ '', '.js', '.vue' ],
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},

	resolveLoader: {
		alias: {
			load: require.resolve(dir.core('loader.js'))
		}
	},

	output: {
		path: dir.dist(),
		filename: 'app.js',
		publicPath: '/assets/'
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			title: 'bear.and.salmon',
			filename: 'index.html',
			template: dir.app('views', 'app.pug')
		}),
		new ExtractTextPlugin("components.css"),
		new ComponentResolverPlugin({
			views: { dir: dir.app('views'), ext: '.pug' },
			scripts: { dir: dir.app('scripts'), ext: '.js' },
			styles: { dir: dir.app('styles'), ext: '.less' }
		})
	]
};
