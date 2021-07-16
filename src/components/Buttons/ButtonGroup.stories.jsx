import React from "react";
import { DocsPage } from "storybook-addon-deps/blocks/DocsPage";

import ButtonGroup from "./ButtonGroup";

export default {
	component: ButtonGroup,
	title: "Components/ButtonGroup",
	parameters: {
		docs: { page: DocsPage },
		dependencies: { withStoriesOnly: false, hideEmpty: false },
	},
};

export const Primary = () => <ButtonGroup />;
