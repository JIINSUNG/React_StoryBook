import { Menu, MenuProps } from "./Menu.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Menu",
  component: Menu,
  argTypes: {
    title: {
      control: {
        type: "text",
        defaultValue: "Menu",
      },
    },
  },
  args: {},
} as Meta<typeof Menu>;

const Template: StoryFn<MenuProps> = (args: MenuProps) => <Menu {...args} />;

export const BasicMenu: StoryObj<typeof Menu> = Template.bind({});
BasicMenu.args = {
  title: "basic menu",
};

export const IconMenu: StoryObj<typeof Menu> = Template.bind({});
IconMenu.args = {
  title: " Icon menu",
  src: "https://via.placeholder.com/48",
  alt: "Icon menu",
};
