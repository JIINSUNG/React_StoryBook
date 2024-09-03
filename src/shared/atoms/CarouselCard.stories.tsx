import { CarouselCard, CarouselCardProps } from "./CarouselCard";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/CarouselCard",
  component: CarouselCard,
  argTypes: {},
  args: {},
} as Meta<typeof CarouselCard>;

const Template: StoryFn<CarouselCardProps> = (args: CarouselCardProps) => (
  <CarouselCard {...args} />
);

export const PropertyName: StoryObj<typeof CarouselCard> = Template.bind({});
PropertyName.args = {};
