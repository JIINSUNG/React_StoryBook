import { Header, HeaderProps } from "./Header";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Header",
  component: Header,
  argTypes: {},
  args: {},
} as Meta<typeof Header>;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const PropertyName: StoryObj<typeof Header> = Template.bind({});
PropertyName.args = {};
