import { BrandNavigator, BrandNavigatorProps } from "./BrandNavigator.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/BrandNavigator",
  component: BrandNavigator,
  argTypes: {
    url: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    url: "https://www.naver.com",
  },
} as Meta<typeof BrandNavigator>;

const Template: StoryFn<BrandNavigatorProps> = (args: BrandNavigatorProps) => (
  <BrandNavigator {...args} />
);

export const NavigateToNaver: StoryObj<typeof BrandNavigator> = Template.bind(
  {},
);
NavigateToNaver.args = {
  url: "https://www.naver.com",
};
