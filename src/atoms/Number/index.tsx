import React, { ReactElement } from 'react';

import styles from './style.scss';

type NumberProps = {
  /**
   * Number to show
   */
  num: number;

  /**
   * @default 'text'
   */
  color?: 'text' | 'muteText';

  /**
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
}

const Number = (props: NumberProps): ReactElement => (
  <span className={[styles.number, styles[props.color || 'text'], styles[props.size || 'medium']].join(' ')}>
    {props.num}
  </span>
)

export default Number;