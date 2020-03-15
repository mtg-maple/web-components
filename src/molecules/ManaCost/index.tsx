import React, { FC, ReactElement } from 'react';
import Symbol from '../../atoms/Symbol';
import { SymbolString } from '../../atoms/Symbol/symbolString';
import { containPresenter } from '../../utils';

import styles from './style.scss';

export type ManaCostProps = {
  value: string;

  /**
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export type ManaCostPresenterProps = {
  symbols: SymbolString[];
  size: 'small' | 'medium' | 'large';
  className: string;
}

export const ManaCostPresenter: FC<ManaCostPresenterProps> = ({ symbols, size, className }) => (
  <ul className={[styles.manaCostItemList, className].join(' ')}>
    {
      symbols.map((symbol: SymbolString) => (
        <li className={styles.manaCostItem}>
          <Symbol type="cost" value={symbol} size={size}/>
        </li>
      ))
    }
  </ul>
);

export const ManaCostContainer = (presenter: FC<ManaCostPresenterProps>, props: ManaCostProps): ReactElement | null => {
  const symbols = (props.value.trim().slice(1, -1).split('}{') as SymbolString[]);
  const className = props.className || '';
  const size = props.size || 'medium';
  return presenter({ symbols, size, className });
};

const ManaCost: FC<ManaCostProps> = (props) => containPresenter<ManaCostProps, ManaCostPresenterProps>(ManaCostContainer, ManaCostPresenter)(props);

export default ManaCost;