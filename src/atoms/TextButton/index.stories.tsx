import React from 'react';
import { storiesOf } from "@storybook/react";

import TextButton from '../TextButton';

const components = storiesOf("Atoms", module)
components.add("TextButton", () => (
  <TextButton label="Hello World"/>
))