import React, { FC } from 'react';

import styles from './style.scss';

type SelectOption = {
  label: string;
  value: string;
}

type SelectProps = {
  options: SelectOption[];

  className?: string;
  
  /**
   * text alignment in select box
   * 
   * 'ltl': left, 'rtl': right
   * @default 'auto'
   */
  dir?: 'auto' | 'ltl' | 'rtl';

  onChange?: (e: React.ChangeEvent) => void;

  onClick?: (e: React.MouseEvent) => void;
}

const Select: FC<SelectProps> = ({ options, dir = 'auto', className = '', onChange, onClick }) => {
  return (
    <select className={[styles.select, className].join(' ')} dir={dir} onChange={onChange} onClick={onClick}>
      {options.map((option: SelectOption) => (
        <option value={option.value} key={`${option.value}-${option.label}`}>{option.label}</option>
      ))}
    </select>
  )
};

export default Select;
