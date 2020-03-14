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

  /**
   * @default 'default'
   */
  weight?: 'default' | 'bold';
}

const Label = (props: LabelProps): ReactElement => (
  <span className={[styles.label, styles[props.color || 'text'], styles[props.size || 'medium'], styles[props.weight || 'default']].join(' ')}>
    {props.text}
  </span>
)

export default Label;