const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.tsx',
		print: './src/print.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
		 title: 'Progressive Web Application',
		}),
	 new WorkboxPlugin.GenerateSW({
		 clientsClaim: true,
		 skipWaiting: true,
	 }),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};