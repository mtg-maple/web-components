import React from 'react';
import { storiesOf } from '@storybook/react';

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import IconButton from '../IconButton';

const components = storiesOf('Atoms', module)
components.add('IconButton', () => (
  <IconButton icon={faSearch} type="large" color="primary"/>
));