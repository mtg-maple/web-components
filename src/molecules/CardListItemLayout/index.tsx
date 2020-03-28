import React, { FC, ReactElement } from 'react';

import CardImage, { CardImageProps } from '../../atoms/CardImage';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export type CardListItemLayoutProps = {
  cardImageProps: CardImageProps;
  info: ReactElement;
  onClick?: (e: React.MouseEvent) => void;
  showMoreIcon?: boolean;
  className?: string;
};

const CardListItemLayout: FC<CardListItemLayoutProps> = ({ cardImageProps, info, onClick, showMoreIcon, className }) => {
  const listItemContent = (
    <div className={[styles.cardListItemContent, className].join(' ')}>
      <CardImage { ...{ ...cardImageProps, className: [cardImageProps.className, styles.cardImage].join(' ') } }/>
        <div className={styles.info}>
          { info }
        </div>
        {
          showMoreIcon &&
          <FontAwesomeIcon icon={faChevronRight} className={styles.moreIcon}/>
        }
    </div>
  );
  return (
    <li className={[styles.cardListItem, className].join(' ')}>
      {
        typeof onClick === 'undefined' ? listItemContent : <a href="#" className={styles.cardListItemLink} onClick={onClick}>{ listItemContent }</a>
      }
    </li> 
  );
};

export default CardListItemLayout;