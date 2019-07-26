import React from 'react';
import './form-input.styles.scss'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name: string;
  type: 'email' | 'password';
  value: string;
  required: boolean;
}

export const FormInput: React.FC<Props> = ({ handleChange, label, ...otherProps }): JSX.Element => {
  return (
    <div className='group' >
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {
        label
          ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>
          : null
      }
    </div>
  )
}