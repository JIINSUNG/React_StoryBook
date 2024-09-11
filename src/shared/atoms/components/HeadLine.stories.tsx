import { HeadLine, HeadLineProps } from "./HeadLine";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/HeadLine",
  component: HeadLine,
  argTypes: {
    pName: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof HeadLine>;

const Template: StoryFn<HeadLineProps> = (args: HeadLineProps) => (
  <HeadLine {...args} />
);

export const BasicHeadLine: StoryObj<typeof HeadLine> = Template.bind({});
BasicHeadLine.args = {
  pName: "",
};

export const BasicHeadLineWithName: StoryObj<typeof HeadLine> = Template.bind(
  {},
);
BasicHeadLineWithName.args = { pName: "상품명" };
