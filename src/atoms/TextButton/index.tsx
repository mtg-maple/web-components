import React from 'react';

import styles from './style.scss';

export interface TextButtonProps {
  /** 
   * Label of the button
  */
  label: string;

  /**
   * Color of the button
   * @default 'primary'
   */
  color?: 'primary' | 'secondary';

  /**
   * Add style 'width: 100%'
   * @default false
   */
  grow?: boolean;

  /** 
   * @default false
  */
 disabled?: boolean;

  /**
   * Handler of click events
   */
  onClick?: (e: React.MouseEvent) => void;
}

const TextButton = (props: TextButtonProps) => (
  <button
    className={`
      ${styles.textButton} ${styles[props.color || 'primary']}
      ${props.grow ? styles.grow : ''}
    `}
    disabled={props.disabled || false}
    onClick={(e) => {
      if (props.onClick != undefined) {
        props.onClick(e);
      }
    }}
  >
    {props.label}
  </button>
);

export default TextButton;
