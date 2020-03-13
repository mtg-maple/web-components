import React, { ReactElement } from 'react';

import styles from './style.scss';

export type LabelProps = {
  /**
   * Text to show
   */
  text: string;

  /**
   * @default 'text'
   */
  color?: 'text' | 'muteText';

  /**
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
}

const Label = (props: LabelProps): ReactElement => (
  <span className={[styles.label, styles[props.color || 'text'], styles[props.size || 'medium']].join(' ')}>
    {props.text}
  </span>
)

export default Label;