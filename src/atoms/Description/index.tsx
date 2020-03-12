import React, { ReactNode } from 'react';

import styles from './style.scss';

export interface DescriptionProps {
  children: ReactNode;

  /**
   * Font size of the description
   * @default 'medium'
   */
  size?: 'medium' | 'small';

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

const Description = (props: DescriptionProps) => {
  const maxLine = props.maxLine || 0;
  const inlineStyle = {
    WebkitLineClamp: props.maxLine,
  };
  return (
  <p
    className={`
      ${styles.description}
      ${styles[props.size || 'medium']}
      ${styles[props.color || 'text']}
      ${maxLine == 1 ? styles.singleLine : ''}
      ${maxLine >= 2 ? styles.multipleLine : ''}
    `}
    style={maxLine >= 2 ? inlineStyle : {}}
  >{props.children}</p>
  );
};

export default Description;
