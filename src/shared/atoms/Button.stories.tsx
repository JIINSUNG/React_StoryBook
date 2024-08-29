import React from "react";
import { Button } from "./Button";

export default {
  title: "Test/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    onClick: { control: "onClick" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  backgroundColor: "bg-blue-500",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  backgroundColor: "bg-green-500",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  backgroundColor: "bg-red-500",
  size: "sm",
};
