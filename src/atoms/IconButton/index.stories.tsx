import React from 'react';
import { storiesOf } from "@storybook/react";

import IconButton from '../IconButton';

const components = storiesOf("Atoms", module)
components.add("IconButton", () => (
  <IconButton label="Hello World"/>
))