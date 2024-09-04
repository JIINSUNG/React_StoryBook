import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Image, ImageProps } from "./Image.tsx";

export default {
  title: "Test/Image",
  component: Image,
  argTypes: {
    label: {
      control: {
        type: "text",
        defaultValue: "Image",
      },
    },
    labelDisplay: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["logo", "avatar"],
      },
    },
    src: {
      control: {
        type: "text",
        defaultValue: "https://via.placeholder.com/150",
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["circle", "square"],
      },
    },
  },
  args: {},
} as Meta<typeof Image>;

const Template: StoryFn<ImageProps> = (args: ImageProps) => <Image {...args} />;

export const Avatar: StoryObj<typeof Image> = Template.bind({});
Avatar.args = {
  size: "avatar",
  shape: "circle",
  src: "https://via.placeholder.com/48",
  label: "Avatar",
};

export const CircleLogo: StoryObj<typeof Image> = Template.bind({});
CircleLogo.args = {
  size: "logo",
  shape: "circle",
  src: "https://via.placeholder.com/96",
  label: "Logo",
};

export const SquareLogo: StoryObj<typeof Image> = Template.bind({});
SquareLogo.args = {
  size: "logo",
  shape: "square",
  src: "https://via.placeholder.com/96",
  label: "Logo",
};
