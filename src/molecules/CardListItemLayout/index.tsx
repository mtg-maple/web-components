import React, { FC } from 'react';

import CardImage, { CardImageProps } from '../../atoms/CardImage';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export type CardListItemLayoutProps = {
  cardImageProps: CardImageProps;
  info: FC;
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
};

const CardListItemLayout: FC<CardListItemLayoutProps> = ({ cardImageProps, info, onClick, showMoreIcon }) => {
  const Info = info;
  const listItemContent = (
    <div className={styles.cardListItemContent}>
      <CardImage { ...{ ...cardImageProps, className: [cardImageProps.className, styles.cardImage].join(' ') } }/>
        <div className={styles.info}>
          <Info/>
        </div>
        {
          showMoreIcon &&
          <FontAwesomeIcon icon={faChevronRight} className={styles.moreIcon}/>
        }
    </div>
  );
  return (
    <li className={styles.cardListItem}>
      {
        typeof onClick === 'undefined' ? listItemContent : <a href="#" className={styles.cardListItemLink} onClick={onClick}>{ listItemContent }</a>
      }
    </li> 
  );
};

export default CardListItemLayout;