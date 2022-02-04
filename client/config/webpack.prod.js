const { root, FRONT_DIR } = require('./webpack-helper');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const postcssPresetEnv = require('postcss-preset-env');

const rules = [
	// Use MiniCssExtractPlugin instead
	{
		test: /\.s[ac]ss$/,
		include: [root(FRONT_DIR, 'scss'), root(FRONT_DIR, 'app')],
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {importLoaders: 2}
			},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						plugins: [postcssPresetEnv()],
					},
				}
			},
			'sass-loader'
		]
	},
	// Overriding type
	{
		test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
		include: root(FRONT_DIR, 'assets'),
		type: 'asset',
	},
]

const plugins = [ new MiniCssExtractPlugin() ]

const minimizer = [
	new TerserPlugin({
		parallel: true,
	}),
	new OptimizeCssAssetsPlugin({
		cssProcessorPluginOptions: {
			preset: ['default', { discardComments: { removeAll: true } }],
		},
	})
]

module.exports = merge(common, {
	mode: "production",
	target: 'browserslist',
	devtool: false,
	compareBeforeEmit: true,
	module: {
		rules
	},
	plugins,
	optimization: {
		minimize: true,
		minimizer
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});