import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Test/Button",
    component: Button,
    argTypes: {
        backgroundColor: {
            control: {
                type: "select",
                options: ["red", "blue", "green", "yellow"],
            },
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
    },
    args: {
        backgroundColor: "green",
        size: "md",
        label: "기본 버튼",
        onClick: () => {
            alert("button clicked!");
        },
    },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
    args: {
        backgroundColor: "blue",
        size: "md",
        label: "Primary Button",
    },
};

export const Large: StoryObj<typeof Button> = {
    args: {
        backgroundColor: "red",
        size: "lg",
        label: "Large Button",
    },
};

export const Small: StoryObj<typeof Button> = {
    args: {
        backgroundColor: "green",
        size: "sm",
        label: "Small Button",
    },
};
