module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.tsx?$/,
		exclude: /node_modules/,
	});

	config.resolve.extensions.push(".ts", ".tsx");

	return config;
};
