import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Accessible call-to-action button',
      description: {
        component:
          'Use the Button component for any primary or secondary call-to-action. It exposes size, emphasis and background color knobs so you can adapt it to different surfaces without redesigning the markup.',
      },
    },
  },
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the primary version for the most important action on a view. It switches to the solid accent style and keeps the same API.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default button style for secondary or less prominent actions. Pair it with the primary button to create a hierarchy.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large buttons increase tap targets on touch-heavy layouts or hero sections. No other props change.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small buttons suit dense UI such as toolbars or tables. Keep labels short so the control remains readable.',
      },
    },
  },
};
