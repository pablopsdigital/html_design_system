import { createCard } from "./card";

export default {
  title: "HTML Design System/Atoms/Card",
};

const Template = ({ label, ...args }) => {
  return createCard({ label, ...args });
};

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
};
