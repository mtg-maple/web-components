import React from 'react';
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
   * @default 'regular'
   */
  type?: 'large' | 'regular' | 'small';

  /**
   * Color of the icon
   *  
   * アイコンの色を指定する 
   * @default 'primary'
  */
  color?: 'primary' | 'secondary' | 'text' | 'muteText';

  onClick?: (e: React.MouseEvent) => void;
}

const IconButton = (props: IconButtonProps) => (
  <button
    className={`${styles.iconButton} ${styles[props.type || 'regular']} ${styles[props.color || 'primary']}`}
    onClick={(e) => {
      if (props.onClick != undefined) {
        props.onClick(e);
      }
    }}>
    <FontAwesomeIcon icon={props.icon}/>
  </button>
);

export default IconButton;
