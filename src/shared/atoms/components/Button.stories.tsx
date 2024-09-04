import { Button, ButtonProps } from "./Button.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: "select",
        options: ["red", "blue", "green", "yellow"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    backgroundColor: "green",
    size: "md",
    label: "기본 버튼",
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary: StoryObj<typeof Button> = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  size: "md",
  label: "Primary Button",
};

export const Large: StoryObj<typeof Button> = Template.bind({});
Large.args = {
  backgroundColor: "red",
  size: "lg",
  label: "Large Button",
};

export const Small: StoryObj<typeof Button> = Template.bind({});
Small.args = {
  backgroundColor: "green",
  size: "sm",
  label: "Small Button",
};
