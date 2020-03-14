import React, { ReactElement } from 'react';

import styles from './style.scss';

export type CardImageProps = {
  /**
   * Image source of the image
   */
  src: string;

  /**
   * Alternative text of the image
   */
  alt: string;
  /**
   * Size of the image
   * @default 'thumbnail'
   */
  size?: 'thumbnail' | 'deckThumbnail' | 'cover' | 'preview';

  onClick?: (e: React.MouseEvent) => void;

  linkUrl?: string;

  className?: string;
}

const CardImage = (props: CardImageProps): ReactElement => {
  type ImageProps = {
    className?: string;
  }
  const Image = (innerProps: ImageProps): ReactElement => <img className={[styles.cardImage, styles[props.size || 'thumbnail'], innerProps.className].join(' ')} src={props.src} alt={props.alt}/>;
  return (
    props.onClick || props.linkUrl ? <a className={props.className} href={props.linkUrl || '#'} onClick={props.onClick}><Image/></a> : <Image className={props.className}/>
  );
};

export default CardImage;