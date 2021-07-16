import React from "react";
import { DocsPage } from "storybook-addon-deps/blocks/DocsPage";

import App from "./App";

export default {
	component: App,
	title: "Components/App",
	parameters: {
		docs: { page: DocsPage },
		dependencies: { withStoriesOnly: false, hideEmpty: false },
	},
};

export const Primary = () => <App />;
