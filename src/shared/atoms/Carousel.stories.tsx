import { Carousel, CarouselProps } from "./Carousel";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/Carousel",
  component: Carousel,
  argTypes: {},
  args: {},
} as Meta<typeof Carousel>;

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args} />
);

export const PropertyName: StoryObj<typeof Carousel> = Template.bind({});
PropertyName.args = {};
