import React, { useState, ReactElement } from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../../atoms/IconButton';
import styles from './style.scss';

export type InputProps = {
  value?: string;
  placeholder?: string;
  className?: string;
  setValue: (newValue: string) => void;
}

const Input = (props: InputProps): ReactElement => {
  return (
    <div className={[styles.inputBox, props.className].join(' ')}>
      <input
        type="text"
        value={props.value}
        className={styles.input}
        placeholder={props.placeholder}
        onChange={(e: React.FormEvent<HTMLInputElement>): void =>{
          props.setValue(e.currentTarget.value);
        }}
      ></input>
      {
        props.value &&
        <IconButton
          icon={faTimesCircle}
          size="small"
          color="muteText"
          className={styles.clearButton}
          onClick={(e: React.MouseEvent): void =>{
            props.setValue('');
          }}
        />
      }
    </div>
  );
};

export default Input;