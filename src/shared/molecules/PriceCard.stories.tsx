import { PriceCard, PriceCardProps } from "./PriceCard.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/PriceCard",
  component: PriceCard,
  argTypes: {
    product: {
      control: {
        type: "text",
      },
    },
    price: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    product: "물건이름",
    price: 10000,
  },
} as Meta<typeof PriceCard>;

const Template: StoryFn<PriceCardProps> = (args: PriceCardProps) => (
  <PriceCard {...args} />
);

export const BasicCard: StoryObj<typeof PriceCard> = Template.bind({});
BasicCard.args = {
  product: "하루특가",
  price: 10000,
};
