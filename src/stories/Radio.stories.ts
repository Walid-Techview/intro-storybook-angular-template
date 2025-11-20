import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { RadioButtonComponent } from './radio.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Example/RadioButton',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  args: {
    selectionChange: fn(),
  },
  argTypes: {
    selectionChange: { action: 'selectionChange' },
  },
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    name: 'demo-group',
    value: 'option-a',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'demo-group',
    value: 'option-b',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    name: 'demo-group',
    value: 'option-c',
    disabled: true,
  },
};
