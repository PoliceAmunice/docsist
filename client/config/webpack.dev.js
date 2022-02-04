const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { BUILD_DIR } = require('./webpack-helper');

const config = {
	mode: "development",
	target: 'web',
	devtool: "source-map",
};

if (process.env.WEBPACK_SERVE === 'true') {
	config.devServer = {
		static: './' + BUILD_DIR,
		host: process.env.USE_DOCKER === 'true' ? '0.0.0.0' : 'localhost',
		port: process.env.PORT || 3030,
		historyApiFallback: true,
		compress: true,
		hot: true
	};

	config.plugins = [
		new ReactRefreshWebpackPlugin()
	];
}



module.exports = merge(common, config);