import { HeadLine, HeadLineProps } from "./HeadLine";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/HeadLine",
  component: HeadLine,
  argTypes: {},
  args: {},
} as Meta<typeof HeadLine>;

const Template: StoryFn<HeadLineProps> = (args: HeadLineProps) => (
  <HeadLine {...args} />
);

export const PropertyName: StoryObj<typeof HeadLine> = Template.bind({});
PropertyName.args = {};
