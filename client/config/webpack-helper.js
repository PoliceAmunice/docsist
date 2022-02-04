const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const root = function(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [ROOT].concat(args));
}

const hardcodes = {
	APP_NAME: 'Docsist',
	BUILD_DIR: 'public',
	FRONT_DIR: 'src',
	FRONT_DIR_RELATIVE: './src/',
}

module.exports = {
	...hardcodes,
	root
}