import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './style.scss';

export interface IconButtonProps {
  /** 
   * IconDefinition (from '@fortawesome/fontawesome-svg-core')
   * 
   * Fontawesomeのアイコン定義を渡す
   */
  icon: IconDefinition;

  /** 
   * Size of the icon
   * 
   * アイコンの大きさを指定する
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small';

  /**
   * Color of the icon
   *  
   * アイコンの色を指定する 
   * @default 'primary'
  */
  color?: 'primary' | 'secondary' | 'text' | 'muteText';

  onClick?: (e: React.MouseEvent) => void;

  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, size = 'medium', color = 'primary', onClick, className = ''}) => (
  <button
    className={[styles.iconButton, styles[size], styles[color], className].join(' ')}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon}/>
  </button>
);

export default IconButton;
