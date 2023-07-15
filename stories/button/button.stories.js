import { createButton } from "./button";

export default {
  title: "HTML Design System/Atoms/Button",
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
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
