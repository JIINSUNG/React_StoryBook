import { Header, HeaderProps } from "./Header.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Header",
  component: Header,
  argTypes: {
    logo: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    logo: "https://via.placeholder.com/200X100",
  },
} as Meta<typeof Header>;

const Template: StoryFn<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const BasicHeader: StoryObj<typeof Header> = Template.bind({});
BasicHeader.args = {
  logo: "https://via.placeholder.com/200X40",
};
