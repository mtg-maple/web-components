import React, { ReactElement } from 'react';

import styles from './style.scss';

type SelectOption = {
  label: string;
  value: string;
}

type SelectProps = {
  options: SelectOption[];

  classNames?: string[];
  
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

const Select = (props: SelectProps): ReactElement => {
  return (
    <select className={[styles.select, props.classNames].join(' ')} dir={props.dir || 'auto'} onChange={props.onChange} onClick={props.onClick}>
      {props.options.map((option: SelectOption) => (
        <option value={option.value} key={`${option.value}-${option.label}`}>{option.label}</option>
      ))}
    </select>
  )
};

export default Select;
