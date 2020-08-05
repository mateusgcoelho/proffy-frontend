import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    reference: string;
}

const Input: React.FC<Props> = ({ label, reference, ...rest }) => {
  return (
    <div className="input-block">
        <label htmlFor={reference}>{label}</label>
        <input type="text" id={reference} {...rest} />
    </div>
  );
}
export default Input;