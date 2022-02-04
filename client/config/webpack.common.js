const { root, FRONT_DIR, FRONT_DIR_RELATIVE, BUILD_DIR, APP_NAME } = require('./webpack-helper');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const DotenvWebpackPlugin = require('dotenv-webpack');
const { EnvironmentPlugin } = require('webpack');

const babelLoader = {
	loader: 'babel-loader',
	options: {
		cacheDirectory: true,
		presets: [
			"@babel/preset-env",
			[
				"@babel/preset-react",
				{
					runtime: "automatic"
				}
			],
			"@babel/preset-typescript"
		]
	}
};

const rules = [
	// JS
	{
		test: /\.(ts|js)x?$/,
		exclude: /node_modules/,
		use: [babelLoader],
	},

	// Styles
	{
		test: /\.(s[ac]|c)ss$/,
		include: [root(FRONT_DIR, 'scss'), root(FRONT_DIR, 'app')],
		use: [
			'style-loader',
			{
				loader: 'css-loader',
				options: { importLoaders: 2 }
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

	// Assets
	{
		test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
		include: root(FRONT_DIR, 'assets'),
		type: 'asset/resource', // Only for dev
	},
	{
		test: /\.(woff(2)?|eot|ttf|otf)$/i,
		include: root(FRONT_DIR, 'assets/fonts'),
		type: 'asset/resource',
	}
];

const plugins = [
	new HtmlWebpackPlugin({
		template: FRONT_DIR_RELATIVE + 'index.html',
		favicon: FRONT_DIR_RELATIVE + '/assets/favicon.ico',
		title: APP_NAME,
	}),
	new DotenvWebpackPlugin({safe: true}),
	new EnvironmentPlugin({ APP_NAME: APP_NAME })
]

const alias = {
	App: root(FRONT_DIR, 'app'),
	Assets: root(FRONT_DIR, 'assets'),
	Styles: root(FRONT_DIR, 'scss'),
	Utils: root(FRONT_DIR, 'utils'),
}

module.exports = {
	context: root(""),
	entry: [
		FRONT_DIR_RELATIVE + 'index.tsx'
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [FRONT_DIR, 'node_modules'],
		alias
	},
	module: {
		rules
	},
	plugins,
	output: {
		path: root(BUILD_DIR),
		publicPath: '/',
		filename: '[name].bundle.[chunkhash].js',
		assetModuleFilename: 'assets/[fullhash][ext][query]',
		clean: true,
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				}
			},
		},
	}
}