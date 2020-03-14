import React, { FC } from 'react';

import { SymbolString, getClassName } from './symbolString';
import styles from './style.scss';

export type SymbolProps = {
  value: SymbolString;

  /**
   * Type of the symbol
   * @default 'cost'
   */
  type?: 'cost' | 'icon';

  /**
   * Color of the symbol (Use for icon only)
   * @default 'text'
   */
  color?: 'primary' | 'secondary' | 'text' | 'muteText';

  /**
   * Size of the symbol
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';
}

const Symbol: FC<SymbolProps> = ({ value, type = 'cost', color = 'text', size = 'medium'}) => {
  const classNames = [
    styles.mana,
    styles.ms,
    type == 'cost' ? styles['ms-cost'] : styles[color],
    styles[getClassName(value)],
    styles[size],
  ];
  return (
    <i className={classNames.join(' ')}></i>
  );
}

export default Symbol;