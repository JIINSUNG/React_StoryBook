import { TypographyProps, Typography } from "./Typography.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Typography",
  component: Typography,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["head", "subhead", "paragraph", "title"],
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    size: "head",
    children: "Text 컴포넌트",
  },
} as Meta<typeof Typography>;

const Template: StoryFn<TypographyProps> = (args: TypographyProps) => (
  <Typography {...args} />
);

export const Head: StoryObj<typeof Typography> = Template.bind({});
Head.args = {
  size: "head",
  children: "Head",
};

export const SubHead: StoryObj<typeof Typography> = Template.bind({});
SubHead.args = {
  size: "subhead",
  children: "SubHead",
};

export const Title: StoryObj<typeof Typography> = Template.bind({});
Title.args = {
  size: "title",
  children: "Title",
};

export const Paragraph: StoryObj<typeof Typography> = Template.bind({});
Paragraph.args = {
  size: "paragraph",
  children: "Paragraph",
};
