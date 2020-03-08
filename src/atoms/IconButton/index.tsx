import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './style.scss';

export interface IconButtonProps {
  icon: IconDefinition;
  type: 'large' | 'regular' | 'small';
  color: 'primary' | 'secondary' | 'text' | 'muteText'
}

const IconButton = (props: IconButtonProps) => (
  <button className={`${styles.iconButton} ${styles[props.type]} ${styles[props.color]}`}>
    <FontAwesomeIcon icon={props.icon}/>
  </button>
);

export default IconButton;
