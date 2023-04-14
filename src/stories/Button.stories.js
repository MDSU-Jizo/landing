import { Button } from "../components/UI/atoms/Button";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: "medium",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const extraLarge = {
  args: {
    label: 'Button',
    size: 'extraLarge',
    textProps: {size: '$5'}
  },
};

export const large = {
  args: {
    label: 'Button',
    size: 'large',
    textProps: {size: '$6'},
  },
};

export const medium = {
  args: {
    label: 'Button',
    size: 'small',
    textProps: {size: '$7'},
  },
};

export const small = {
  args: {
    label: 'Button',
    size: 'small',
    textProps: {size: '$9'},
  },
};
