import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  args: {
    checkedChange: fn(),
  },
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    label: 'Checkbox option',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked option',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};
