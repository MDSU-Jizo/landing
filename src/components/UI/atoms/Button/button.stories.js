import { Button } from "./index";
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
    label: 'Hello',
    size: 'extraLarge',
    textProps: {size: '$5', color: '$white'}
  },
};

export const large = {
  args: {
    label: 'Button',
    size: 'large',
    textProps: {size: '$6', color: '$white'},
  },
};

export const medium = {
  args: {
    label: 'Button',
    size: 'small',
    textProps: {size: '$7', color: '$white'},
  },
};

export const small = {
  args: {
    label: 'Button',
    size: 'small',
    textProps: {size: '$9', color: '$white'},
  },
};
