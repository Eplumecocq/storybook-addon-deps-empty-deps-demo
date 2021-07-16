const DependenciesPlugin = require("storybook-dep-webpack-plugin");

module.exports = async ({ config }) => {
	config.plugins.push(new DependenciesPlugin({}));

	config.module.rules.push({
		test: /\.tsx?$/,
		exclude: /node_modules/,
	});

	config.resolve.extensions.push(".ts", ".tsx");

	return config;
};
