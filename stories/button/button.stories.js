import { createButton } from "./button";

export default {
  title: "HTML Design System/Atoms/Button",
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
