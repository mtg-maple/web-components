import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './style.scss';

export type UserIconProps = {
  imageUrl?: string;
  size?: 'large' | 'medium' | 'small';
  linkUrl?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const UserIcon = (props: UserIconProps): ReactElement => {
  let InnerIcon: () => ReactElement;
  if (props.imageUrl) {
    InnerIcon = (): ReactElement => <img className={[styles.iconImg, styles[props.size || 'medium']].join(' ')} src={props.imageUrl}></img>;
  } else {
    InnerIcon = (): ReactElement => <FontAwesomeIcon className={[styles.altIcon, styles[props.size || 'medium']].join(' ')} icon={faUserCircle}/>;
  }
  return (
      props.onClick || props.linkUrl ? <a href={props.linkUrl || '#'} onClick={props.onClick}><InnerIcon/></a> : <InnerIcon/>
  );
}

export default UserIcon;
