import { BrandNavigator, BrandNavigatorProps } from "./BrandNavigator";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/BrandNavigator",
  component: BrandNavigator,
  argTypes: {},
  args: {},
} as Meta<typeof BrandNavigator>;

const Template: StoryFn<BrandNavigatorProps> = (args: BrandNavigatorProps) => (
  <BrandNavigator {...args} />
);

export const PropertyName: StoryObj<typeof BrandNavigator> = Template.bind({});
PropertyName.args = {};
