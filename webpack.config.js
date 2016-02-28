const path = require('path');

const compassMixinsPath = path.resolve(__dirname, './node_modules/compass-mixins/lib');

module.exports = {
	entry: './src/app/app.tsx',
	output: {
		path: 'dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx']
	},
	devtool: 'source-map', // if we want a source map
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loader: 'webpack-typescript?target=ES5&jsx=react'
			},
			{
				test: /\.scss$/,
				loader: `style!css!sass-loader?includePaths[]=${compassMixinsPath}`
			}
		]
	}
};