import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const taskboxTheme = create({
  base: 'light',
  brandTitle: 'Taskbox',
  brandUrl: 'https://www.rva.be',
  brandImage: '/logo.svg',
  brandTarget: '_blank',
});

addons.setConfig({
  theme: taskboxTheme,
});
