import { BrandCard, BrandCardProps } from "./BrandCard";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/BrandCard",
  component: BrandCard,
  argTypes: {},
  args: {},
} as Meta<typeof BrandCard>;

const Template: StoryFn<BrandCardProps> = (args: BrandCardProps) => (
  <BrandCard {...args} />
);

export const PropertyName: StoryObj<typeof BrandCard> = Template.bind({});
PropertyName.args = {};
