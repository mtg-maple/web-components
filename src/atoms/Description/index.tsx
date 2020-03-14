import React, { FC, ReactNode } from 'react';

import styles from './style.scss';

export interface DescriptionProps {
  children: ReactNode;

  /**
   * Font size of the description
   * @default 'regular'
   */
  size?: 'regular' | 'small';

  /**
   * Color of the description
   * @default 'text'
   */
  color?: 'text' | 'muteText';

  /**
   * Max line number of the description. Overflow text is omitted with ellipsis.
   */
  maxLine?: number;
}

const Description: FC<DescriptionProps> = ({children, size = 'regular', color = 'text', maxLine = 0}) => {
  const inlineStyle = {
    WebkitLineClamp: maxLine,
  };
  return (
  <p
    className={`
      ${styles.description}
      ${styles[size]}
      ${styles[color]}
      ${maxLine == 1 ? styles.singleLine : ''}
      ${maxLine >= 2 ? styles.multipleLine : ''}
    `}
    style={maxLine >= 2 ? inlineStyle : {}}
  >{children}</p>
  );
};

export default Description;
