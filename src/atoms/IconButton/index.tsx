import React from 'react';

export interface IconButtonProps {
  label: string;
}

const IconButton = (props: IconButtonProps) => (
  <button>{props.label}</button>
);

export default IconButton;
