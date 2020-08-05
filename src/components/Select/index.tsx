import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    reference: string;
    options: Array<{
      value: string;
      label: string;
    }>;
}

const Select: React.FC<Props> = ({ label, reference, options, ...rest }) => {
  return (
    <div className="select-block">
        <label htmlFor={reference}>{label}</label>
        <select value="" id={reference} {...rest}>
          <option value="" disabled selected hidden>Selecione uma opção</option>

          {options.map(option => {
            return <option key={option.value} value={option.value}>{option.label}</option>
          })}
        </select>
    </div>
  );
}
export default Select;