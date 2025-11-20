import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { SlideToggleComponent } from './slide-toggle.component';

const meta: Meta<SlideToggleComponent> = {
  title: 'Example/SlideToggle',
  component: SlideToggleComponent,
  tags: ['autodocs'],
  args: {
    checkedChange: fn(),
  },
  argTypes: {
    checkedChange: { action: 'checkedChange' },
  },
};

export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Default: Story = {
  args: {
    label: 'Material toggle',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled toggle',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const LabelBefore: Story = {
  args: {
    label: 'Label before',
    labelPosition: 'before',
  },
};
