import { Price, PriceProps } from "./Price.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Price",
  component: Price,
  argTypes: {
    price: {
      control: {
        type: "number",
      },
    },
    size: {
      control: {
        type: "select",
        options: ["head", "normal"],
      },
    },
  },
  args: {
    size: "head",
    price: 10000,
  },
} as Meta<typeof Price>;

const Template: StoryFn<PriceProps> = (args: PriceProps) => <Price {...args} />;

export const PriceWithHeadStyle: StoryObj<typeof Price> = Template.bind({});
PriceWithHeadStyle.args = {
  size: "head",
  price: 10000,
};

export const PriceWithNormalStyle: StoryObj<typeof Price> = Template.bind({});
PriceWithNormalStyle.args = {
  size: "normal",
  price: 10000,
};
