import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { addParameters } from '@storybook/react'; // <- or your storybook framework
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

setConsoleOptions({
  panelExclude: [],
});

addParameters({
  backgrounds: [
    { name: 'maple', value: '#1E1F20', default: true },
    { name: 'twitter', value: '#00aced'},
    { name: 'facebook', value: '#3b5998' },
  ],
  options: {
    theme: themes.dark,
  },
});

function loadStories() {
  // let req = require.context("../src/stories", true, /.(tsx|js)$/);
  // req.keys().forEach(filename => req(filename));

  let req = require.context("../src", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

