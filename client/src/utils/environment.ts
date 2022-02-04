if (typeof process.env['APP_NAME'] === 'undefined' ||
	 typeof process.env['APP_ENV']  === 'undefined') {
	throw Error(`Undefined process variable`);
}

type Environment = {
	readonly APP_NAME: string;
	readonly APP_ENV: string;
}

const env: Environment = {
	APP_NAME: process.env['APP_NAME'],
	APP_ENV: process.env['APP_ENV'],
};

export default env;