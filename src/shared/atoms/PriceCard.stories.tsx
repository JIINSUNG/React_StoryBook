import { PriceCard, PriceCardProps } from "./PriceCard";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/PriceCard",
  component: PriceCard,
  argTypes: {},
  args: {},
} as Meta<typeof PriceCard>;

const Template: StoryFn<PriceCardProps> = (args: PriceCardProps) => (
  <PriceCard {...args} />
);

export const PropertyName: StoryObj<typeof PriceCard> = Template.bind({});
PropertyName.args = {};
