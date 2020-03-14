import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './style.scss';

export type UserIconProps = {
  alt: string;
  src?: string;
  size?: 'large' | 'medium' | 'small';
  color?: 'primary' | 'secondary' | 'text' | 'muteText';
  linkUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const UserIcon = (props: UserIconProps): ReactElement => {
  let InnerIcon: () => ReactElement;
  if (props.src) {
    InnerIcon = (): ReactElement => <img className={[styles.iconImg, styles[props.size || 'medium']].join(' ')} src={props.src} alt={props.alt}></img>;
  } else {
    InnerIcon = (): ReactElement => <FontAwesomeIcon className={[styles.altIcon, styles[props.color || 'text'], styles[props.size || 'medium']].join(' ')} icon={faUserCircle}/>;
  }
  return (
      props.onClick || props.linkUrl ? <a href={props.linkUrl || '#'} onClick={props.onClick}><InnerIcon/></a> : <InnerIcon/>
  );
}

export default UserIcon;
