import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import IconButton from '../../atoms/IconButton';
import styles from './style.scss';

export type InputProps = {
  value?: string;
  icon?: IconDefinition;
  placeholder?: string;
  className?: string;
  setValue: (newValue: string) => void;
}

const Input = (props: InputProps): ReactElement => {
  return (
    <div className={[styles.inputBox, props.className].join(' ')}>
      {
        props.icon &&
        <FontAwesomeIcon className={styles.icon} icon={props.icon}/>
      }
      <input
        type="text"
        value={props.value}
        className={[styles.input, props.icon && styles.withIcon].join(' ')}
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
          onClick={(): void =>{
            props.setValue('');
          }}
        />
      }
    </div>
  );
};

export default Input;