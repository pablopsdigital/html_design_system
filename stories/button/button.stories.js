import { createButton } from "./button";

export default {
  title: "HTML Design System/Atoms/Button",
  decorators: [
    (story) => {
      const decorator = document.createElement("div");
      decorator.style.margin = "24px";
      decorator.appendChild(story());
      return decorator;
    },
  ],
  parameters: {
    actions: {
      handles: ["mouseover", "click .btn"],
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#FFFFFF",
        },
        {
          name: "blackfriday",
          value: "#000000",
        },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      name: "label",
      control: {
        type: "text",
      },
    },
    style: {
      name: "style",
      options: ["filled", "outlined"],
      control: {
        type: "radio",
      },
    },
    size: {
      name: "size",
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    onClick: {
      description: "Event",
      action: "clicked",
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
