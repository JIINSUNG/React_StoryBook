import { MenuList, MenuListProps } from "./MenuList.tsx";
import type { StoryObj, Meta, StoryFn } from "@storybook/react";
import { Menu } from "../atoms/components/Menu.tsx";

export default {
  title: "Test/MenuList",
  component: MenuList,
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["row", "col"],
      },
    },
    withIcons: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    direction: "col",
    withIcons: false,
  },
} as Meta<typeof MenuList & { withIcons: boolean }>;

const Template: StoryFn<MenuListProps & { withIcons?: boolean }> = (
  args: MenuListProps & { withIcons?: boolean },
) => (
  <MenuList {...args}>
    <Menu
      title="menu1"
      src={args.withIcons ? "https://via.placeholder.com/48" : undefined}
      alt="Icon menu"
    />
    <Menu
      title="menu2"
      src={args.withIcons ? "https://via.placeholder.com/48" : undefined}
      alt="Icon menu"
    />
    <Menu
      title="menu3"
      src={args.withIcons ? "https://via.placeholder.com/48" : undefined}
      alt="Icon menu"
    />
  </MenuList>
);

export const ColumnBasicMenuList: StoryObj<
  MenuListProps & { withIcons?: boolean }
> = Template.bind({});
ColumnBasicMenuList.args = {
  direction: "col",
  withIcons: false, // 아이콘을 표시하지 않음
};

export const RowBasicMenuList: StoryObj<
  MenuListProps & { withIcons?: boolean }
> = Template.bind({});
RowBasicMenuList.args = {
  direction: "row",
  withIcons: false, // 아이콘을 표시하지 않음
};

export const ColumnIconMenuList: StoryObj<
  MenuListProps & { withIcons?: boolean }
> = Template.bind({});
ColumnIconMenuList.args = {
  direction: "col",
  withIcons: true,
};

export const RowIconMenuList: StoryObj<
  MenuListProps & { withIcons?: boolean }
> = Template.bind({});
RowIconMenuList.args = {
  direction: "row",
  withIcons: true,
};
