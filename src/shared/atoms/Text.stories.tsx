import { Text, TextProps } from "./Text";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Text",
  component: Text,
  argTypes: {},
  args: {},
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args: TextProps) => <Text {...args} />;

export const PropertyName: StoryObj<typeof Text> = Template.bind({});
PropertyName.args = {};
