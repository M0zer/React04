import Button from "../components/UI/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { texts: { type: "text", defaultValue: "alma" },onClick: { action:'clicked'}},
};
const Template = ({ texts, ...args }) => <Button {...args}>{texts}</Button>;

export const Basic = Template.bind({});
Basic.args = {
  texts: "körte",
};
export const Basic2 = Template.bind({});
Basic2.args = {
  texts: "alma",
};
