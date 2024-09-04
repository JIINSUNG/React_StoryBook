import { Carousel, CarouselProps } from "./Carousel.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";
import { CarouselCard } from "./CarouselCard.tsx";

export default {
  title: "Test/Carousel",
  component: Carousel,
  argTypes: {
    autoScroll: {
      control: {
        type: "boolean",
      },
    },
    autoSlideInterval: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    autoScroll: true,
    autoSlideInterval: 3000,
  },
} as Meta<typeof Carousel>;

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args}>
    <CarouselCard imageSrc="https://via.placeholder.com/300x150" title="Ad 1" />
    <CarouselCard imageSrc="https://via.placeholder.com/300x150" title="Ad 2" />
    <CarouselCard imageSrc="https://via.placeholder.com/300x150" title="Ad 3" />
  </Carousel>
);

export const AutoSlideCarousel: StoryObj<typeof Carousel> = Template.bind({});
AutoSlideCarousel.args = {
  autoScroll: true,
  autoSlideInterval: 3000,
};

export const NoAutoSlideCarousel: StoryObj<typeof Carousel> = Template.bind({});
NoAutoSlideCarousel.args = {
  autoScroll: false,
};
