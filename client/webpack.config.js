module.exports = function(env) {
	if (process.env.production) {
		return require(`./config/webpack.prod`);
	}

	process.env.WEBPACK_SERVE = env.WEBPACK_SERVE;

	return require(`./config/webpack.dev`);
}