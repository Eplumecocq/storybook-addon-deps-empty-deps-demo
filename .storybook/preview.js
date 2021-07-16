import { addDecorator } from "@storybook/react";
import { withDependenciesContext } from "storybook-addon-deps";

addDecorator(withDependenciesContext);

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
