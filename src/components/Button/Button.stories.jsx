import React from "react";
import { DocsPage } from "storybook-addon-deps/blocks/DocsPage";

import Button from "./Button";

export default {
	component: Button,
	title: "Components/Button",
	parameters: {
		docs: { page: DocsPage },
		dependencies: { withStoriesOnly: false, hideEmpty: false },
	},
};

export const Primary = () => <Button label="testing story alone" />;
