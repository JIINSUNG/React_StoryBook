import { CarouselCard, CarouselCardProps } from "./CarouselCard.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";

export default {
  title: "Test/CarouselCard",
  component: CarouselCard,
  argTypes: {
    imageSrc: {
      control: {
        type: "text",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    imageSrc: "https://via.placeholder.com/300x150",
    title: "이미지",
  },
} as Meta<typeof CarouselCard>;

const Template: StoryFn<CarouselCardProps> = (args: CarouselCardProps) => (
  <CarouselCard {...args} />
);

export const BasicCarouselCard: StoryObj<typeof CarouselCard> = Template.bind(
  {},
);
BasicCarouselCard.args = {
  imageSrc: "https://via.placeholder.com/300x150",
  title: "기본 캐러셀 카드",
};
