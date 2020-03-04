import React from 'react';

export interface TextButtonProps {
  label: string;
}

const TextButton = (props: TextButtonProps) => (
  <button>{props.label}</button>
);

export default TextButton;
