import type { Preview } from "@storybook/react";
import "../src/tailwindcss.css";

const preview: Preview = {
  parameters: {
    actions: {
      argTypeRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
