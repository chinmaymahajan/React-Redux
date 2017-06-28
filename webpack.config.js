var path = require('path');

module.exports = {
	entry: './App/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015'],
					plugins: ['transform-object-rest-spread']
				}
			}
		}]
	}
}
