import { BrandCard, BrandCardProps } from "./BrandCard.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/BrandCard",
  component: BrandCard,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    src: "https://via.placeholder.com/300x150",
    alt: "BrandCard",
  },
} as Meta<typeof BrandCard>;

const Template: StoryFn<BrandCardProps> = (args: BrandCardProps) => (
  <BrandCard {...args} />
);

export const BasicBrandCard: StoryObj<typeof BrandCard> = Template.bind({});
BasicBrandCard.args = {
  src: "https://via.placeholder.com/300x150",
  alt: "BasicBrandCard",
};
